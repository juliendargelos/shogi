import Piece from '../piece.js'

class King extends Piece {
  static get big() {
    return true
  }

  static get movements() {
    return [
      [-1,  1],
      [ 0,  1],
      [ 1,  1],
      [-1,  0],
      [ 1,  0],
      [-1, -1],
      [ 0, -1],
      [ 1, -1],
    ]
  }
}

export default King
