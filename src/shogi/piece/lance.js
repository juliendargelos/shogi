import Piece from '../piece.js'

class Lance extends Piece {
  static get movements() {
    return [
      [0, Infinity]
    ]
  }

  static get promotedMovements() {
    return Piece.GoldGeneral.movements
  }
}

export default Lance
