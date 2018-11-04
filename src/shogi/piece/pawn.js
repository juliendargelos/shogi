import Piece from '../piece.js'

class Pawn extends Piece {
  static get movements() {
    return [
      [0, 1]
    ]
  }

  static get promotedMovements() {
    return Piece.GoldGeneral.movements
  }
}

export default Pawn
