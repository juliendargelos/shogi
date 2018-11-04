import Piece from '../piece.js'

class GoldGeneral extends Piece {
  static get big() {
    return true
  }

  static get movements() {
    return [
      [ 0,  1],
      [-1,  1],
      [ 1,  1],
      [-1,  0],
      [ 1,  0],
      [ 0, -1]
    ]
  }
}

export default GoldGeneral
