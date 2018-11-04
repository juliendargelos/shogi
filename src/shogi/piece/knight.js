import Piece from '../piece.js'

class Knight extends Piece {
  static get movements() {
    return [
      [-1, 2],
      [ 1, 2]
    ]
  }

  static get promotedMovements() {
    return Piece.GoldGeneral.movements
  }
}

export default Knight
