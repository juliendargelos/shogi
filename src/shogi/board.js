import Cell from './cell.js'
import Iterator from './iterator.js'

class Board {
  constructor() {
    this.cells = []
    this.pieces = []
  }

  get width() {
    return this.constructor.width
  }

  get height() {
    return this.constructor.height
  }

  get usedPieces() {
    return this.cells.reduce((pieces, cell) => {
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

  clone(callback = null) {
    var board = new this.constructor()
    board.cells = this.cells.map(cell => cell.clone())
    board.pieces = this.capturedPieces
      .map(piece => piece.clone())
      .concat(board.usedPieces)

    var pieces = board.cells.map(cell => cell.piece)
    var reset = () => board.cells.forEach((cell, index) => cell.piece = pieces[index])

    return callback ? callback.call(this, board, reset) : board
  }

  cell(x, y) {
    return this.cells.find(cell => cell.at(x, y))
  }

  row(y) {
    return this.cells.filter(cell => cell.y === y)
  }

  col(x) {
    return this.cells.filter(cell => cell.x === x)
  }

  movements(piece, cell, checkmate = true) {
    if(piece instanceof Cell) {
      cell = piece
      piece = cell.piece
    }

    if(!piece) return []
    if(!cell) cell = this.cells.find(cell => cell.piece === piece)

    var movements = this[`movementsFor${cell ? 'Used' : 'Captured'}`](piece, cell)

    if(checkmate) {
      this.clone(board => {
        var clonedCell = cell ? board.cell(cell.x, cell.y) : null

        movements = movements.filter(c => {
          board.cell(c.x, c.y).piece = piece
          if(clonedCell) clonedCell.piece = null

          var isCheckCell = board.stateOf(piece.owner, false, true) !== this.constructor.states.normal

          return !isCheckCell
        })
      })
    }

    return movements
  }

  movementsForUsed(piece, cell) {
    var movements = []

    piece.movements.forEach(movement => {
      new Iterator(this, cell, movement).forEach(movement => {
        if(movement.piece && movement.piece.owner === piece.owner) return false
        if(!movement.piece || movement.piece.owner !== piece.owner) movements.push(movement)
        if(movement.piece && movement.piece.owner !== piece.owner) return false
      })
    })

    return movements
  }

  movementsForCaptured(piece) {
    var movements = this.cells.filter(cell => !cell.piece)

    if(piece.pawn) {
      movements = movements
        .filter(cell => !this.col(cell.x).find(c => c.piece && c.piece.check({pawn: true, owner: piece.owner, promoted: false})))
        .filter(cell => !(c => c && c.piece && c.piece.check({king: true, owner: {not: piece.owner}}))(this.cell(cell.x, cell.y + (piece.owner.jeweledGeneral ? 1 : -1))))
    }

    if(piece.pawn || piece.lance || piece.knight) {
      var offset = piece.knight ? 2 : 1
      movements = movements.filter(piece.owner.jeweledGeneral ? cell => cell.y < this.height - offset : cell => cell.y > offset - 1)
    }

    return movements
  }

  promotable(piece, destination) {
    return (
      piece.promotable &&
      !piece.promoted &&
      this.cells.find(cell => cell.piece === piece) &&
      (
        (piece.owner.jeweledGeneral && destination.y > this.height - 4) ||
        (piece.owner.kingGeneral && destination.y < 3)
      )
    )
  }

  move(piece, destination, promote = false) {
    if((promote && !this.promotable(piece, destination)) || !this.movements(piece).includes(destination)) return false
    if(destination.piece) {
      destination.piece.owner = piece.owner
      if(destination.piece.promoted) destination.piece.promoted = false
    }

    var cell = this.cells.find(cell => cell.piece === piece)
    destination.piece = piece
    if(promote) piece.promoted = true
    if(cell) cell.piece = null

    return true
  }

  init({kingGeneral, jeweledGeneral}) {
    this.cells = Cell.collection({
      kingGeneral,
      jeweledGeneral,
      width: this.width,
      height: this.height
    }, (k, j) => [
      j.la, j.kn, j.si, j.go, j.ki, j.go, j.si, j.kn, j.la,
      null, j.ro, null, null, null, null, null, j.bi, null,
      j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa,
      null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null,
      k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa,
      null, k.bi, null, null, null, null, null, k.ro, null,
      k.la, k.kn, k.si, k.go, k.ki, k.go, k.si, k.kn, k.la
    ])

    this.pieces = this.usedPieces

    return this
  }

  static get width() {
    return 9
  }

  static get height() {
    return 9
  }
}

export default Board
