import Piece from './piece.js'

class Cell {
  constructor(x, y, piece = null) {
    this.x = x
    this.y = y
    this.piece = piece
  }

  clone(callback = null) {
    var cell = new this.constructor(this.x, this.y, this.piece ? this.piece.clone() : null)
    return callback ? callback.call(this, cell) : cell
  }

  at(x, y) {
    if(x instanceof Piece) return this.piece === x
    else if(Array.isArray(x)) [x, y] = x

    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
      y = x.y
      x = x.x
    }

    return this.x === x && this.y === y
  }

  static collection({kingGeneral, jeweledGeneral, width, height}, generate) {
    return generate
      .call(this, Piece.generator(kingGeneral), Piece.generator(jeweledGeneral))
      .map((piece, index) => new this(index%width, Math.floor(index/height), piece))
  }
}

export default Cell
