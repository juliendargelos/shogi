import Cell from './cell.js'
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
