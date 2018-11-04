import Piece from '../piece.js'

class Bishop extends Piece {
  static get big() {
    return true
  }

  static get movements() {
    return [
      [-Infinity,  Infinity],
      [ Infinity,  Infinity],
      [-Infinity, -Infinity],
      [ Infinity, -Infinity]
    ]
  }

  static get promotedMovements() {
    return this.movements.concat([
      [ 0,  1],
      [-1,  0],
      [ 1,  0],
      [ 0, -1]
    ])
  }
}

export default Bishop
