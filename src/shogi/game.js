import Board from './board.js'
import Player from './player.js'

class Game {
  constructor(player1, player2) {
    this.player1 = Player.from(player1)
    this.player2 = Player.from(player2)
    this.currentPlayer = null
    this.board = new Board()
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

  stateOf(player, checkmate = true) {
    return this.board.clone((board, reset) => {
      var state = this.constructor.states.normal
      var kingCell = board.cells.find(cell => cell.piece && cell.piece.king && cell.piece.owner === player)
      var kingMovements = board.movements(kingCell, null, false)

      board.cells.find(cell => {
        if(!cell.piece || cell.piece.owner === player) return false
        var movements = board.movements(cell, null, false)
        if(!movements.includes(kingCell)) return false
        if(checkmate) {
          state = this.constructor.states.checkmate
          kingMovements.find(movement => {
            movement.piece = kingCell.piece
            kingCell.piece = null

            if(board.stateOf(player, false) === this.constructor.states.normal) {
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
    if(this.over || piece.owner !== this.currentPlayer || !this.board.move(piece, destination, promote)) return false
    this.reversePlayers()
    return true
  }

  clone(callback = null) {
    var game = new this.constructor(this.player1, this.player2)
    game.currentPlayer = this.currentPlayer
    game.board = this.board.clone()
    game.pieces = game.board.pieces
    return callback ? callback.call(this, game) : game
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
