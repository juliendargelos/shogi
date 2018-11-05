import Cell from './cell.js'
import Piece from './piece.js'
import Iterator from './iterator.js'

class Board {
  constructor() {
    this.cells = []
  }

  get width() {
    return this.constructor.width
  }

  get height() {
    return this.constructor.height
  }

  clone(callback = null) {
    var board = new this.constructor()
    board.cells = this.cells.map(cell => cell.clone())
    return callback ? callback.call(this, board) : board
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

  move(origin, destination, promote = false) {
    origin = this.resolve(origin)
    destination = this.resolve(destination)

    if(!origin.piece || !destination.cell) return false

    if(destination.piece) {
      destination.piece.owner = origin.piece.owner
      if(destination.piece.promoted) destination.piece.promoted = false
    }

    destination.cell.piece = origin.piece
    if(promote) origin.piece.promoted = true
    if(origin.cell) origin.cell.piece = null

    return true
  }

  resolve(object) {
    var cell = this.cell(object)
    var piece = cell ? cell.piece : (object instanceof Piece ? piece : null)

    return {cell, piece}
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
