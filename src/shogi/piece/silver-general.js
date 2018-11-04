import Piece from '../piece.js'

class SilverGeneral extends Piece {
  static get big() {
    return true
  }

  static get movements() {
    return [
      [ 0,  1],
      [-1,  1],
      [ 1,  1],
      [-1, -1],
      [ 1, -1]
    ]
  }

  static get promotedMovements() {
    return Piece.GoldGeneral.movements
  }
}

export default SilverGeneral
