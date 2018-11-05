import Board from './board.js'
import Cell from './cell.js'
import Iterator from './iterator.js'
import Player from './player.js'

class Game {
  constructor(player1, player2) {
    this.player1 = Player.from(player1)
    this.player2 = Player.from(player2)
    this.currentPlayer = null
    this.board = new Board()
    this.pieces = []
    this.randomizePlayers()
  }

  get players() {
    return [this.player1, this.player2]
  }

  get kingGeneral() {
    return this.players.find(player => player.kingGeneral)
  }

  get jeweledGeneral() {
    return this.players.find(player => player.jeweledGeneral)
  }

  get firstPlayer() {
    return this.kingGeneral
  }

  get state() {
    return this.stateOf(this.player1) || this.stateOf(this.player2)
  }

  get over() {
    return this.state === this.constructor.checkmate
  }

  get usedPieces() {
    return this.board.cells.reduce((pieces, cell) => {
      if(cell.piece) pieces.push(cell.piece)
      return pieces
    }, [])
  }

  get capturedPieces() {
    const usedPieces = this.usedPieces
    return this.pieces.filter(piece => !usedPieces.includes(piece))
  }

  piecesOf(player) {
    return this.pieces.filter(piece => piece.owner === player)
  }

  piecesUsedBy(player) {
    return this.usedPieces.filter(piece => piece.owner === player)
  }

  piecesCapturedBy(player) {
    return this.capturedPieces.filter(piece => piece.owner === player)
  }

  stateOf(player, checkmate = true) {
    return this.clone((game, reset) => {
      var state = this.constructor.states.normal
      var kingCell = game.board.cells.find(cell => cell.piece && cell.piece.king && cell.piece.owner === player)
      var kingMovements = game.movements(kingCell, null, false)

      game.board.cells.find(cell => {
        if(!cell.piece || cell.piece.owner === player) return false
        var movements = game.movements(cell, null, false)
        if(!movements.includes(kingCell)) return false
        if(checkmate) {
          state = this.constructor.states.checkmate
          kingMovements.find(movement => {
            movement.piece = kingCell.piece
            kingCell.piece = null

            if(game.stateOf(player, false) === this.constructor.states.normal) {
              state = this.constructor.states.check
              return true
            }

            reset()
          })
        }
        else state = this.constructor.states.check

        return true
      })

      return state
    })
  }

  move(piece, destination, promote = false) {
    if(piece instanceof Cell) piece = piece.piece
    if(
      this.over ||
      !piece ||
      piece.owner !== this.currentPlayer ||
      (promote && !this.promotable(piece, destination)) ||
      !this.movements(piece).includes(destination)
    ) return false

    if(destination.piece) {
      destination.piece.owner = piece.owner
      if(destination.piece.promoted) destination.piece.promoted = false
    }

    var cell = this.board.cells.find(cell => cell.piece === piece)
    destination.piece = piece
    if(promote) piece.promoted = true
    if(cell) cell.piece = null

    this.reversePlayers()
    return true
  }

  movements(piece, cell, checkmate = true) {
    if(piece instanceof Cell) {
      cell = piece
      piece = cell.piece
    }

    if(!piece) return []
    if(!cell) cell = this.board.cells.find(cell => cell.piece === piece)

    var movements = this[`movementsFor${cell ? 'Used' : 'Captured'}`](piece, cell)

    if(checkmate) {
      this.clone(game => {
        var clonedCell = cell ? game.board.cell(cell) : null

        movements = movements.filter(movement => {
          game.board.cell(movement).piece = piece
          if(clonedCell) clonedCell.piece = null

          var isCheckCell = game.stateOf(piece.owner, false, true) !== this.constructor.states.normal

          return !isCheckCell
        })
      })
    }

    return movements
  }

  movementsForUsed(piece, cell) {
    var movements = []

    piece.movements.forEach(movement => {
      new Iterator(this.board, cell, ...movement).forEach(movement => {
        if(movement.piece && movement.piece.owner === piece.owner) return false
        if(!movement.piece || movement.piece.owner !== piece.owner) movements.push(movement)
        if(movement.piece && movement.piece.owner !== piece.owner) return false
      })
    })

    return movements
  }

  movementsForCaptured(piece) {
    var movements = this.board.cells.filter(cell => !cell.piece)

    if(piece.pawn) {
      movements = movements
        .filter(cell => !this.board.col(cell.x).find(c => c.piece && c.piece.check({pawn: true, owner: piece.owner, promoted: false})))
        .filter(cell => !(c => c && c.piece && c.piece.check({king: true, owner: {not: piece.owner}}))(this.board.cell(cell.x, cell.y + (piece.owner.jeweledGeneral ? 1 : -1))))
    }

    if(piece.pawn || piece.lance || piece.knight) {
      var offset = piece.knight ? 2 : 1
      movements = movements.filter(piece.owner.jeweledGeneral ? cell => cell.y < this.board.height - offset : cell => cell.y > offset - 1)
    }

    return movements
  }

  promotable(piece, destination) {
    return (
      piece.promotable &&
      !piece.promoted &&
      this.board.cells.find(cell => cell.piece === piece) &&
      (
        (piece.owner.jeweledGeneral && destination.y > this.board.height - 4) ||
        (piece.owner.kingGeneral && destination.y < 3)
      )
    )
  }

  clone(callback = null) {
    return this.board.clone((board, reset) => {
      var game = new this.constructor(this.player1, this.player2)
      game.currentPlayer = this.currentPlayer
      game.board = board
      game.pieces = game.usedPieces.concat(this.capturedPieces.map(piece => piece.clone()))
      return callback ? callback.call(this, game, reset) : game
    })
  }

  reversePlayers() {
    this.player1.type = this.player2.reverse().oppositeType
    return this
  }

  randomizePlayers() {
    this.player1.type = this.player2.randomize().oppositeType
    return this
  }

  start() {
    this.board.init({kingGeneral: this.kingGeneral, jeweledGeneral: this.jeweledGeneral})
    this.pieces = this.usedPieces
    this.currentPlayer = this.firstPlayer
    return this
  }

  static get states() {
    return {
      normal: 0,
      check: 1,
      checkmate: 2
    }
  }
}

export default Game
