import Game from './shogi/game.js'
import Player from './shogi/player.js'
import Board from './shogi/board.js'
import Cell from './shogi/cell.js'
import Iterator from './shogi/iterator.js'
import IteratorDimension from './shogi/iterator/dimension.js'
import FiniteIteratorDimension from './shogi/iterator/dimension/finite.js'
import InfiniteIteratorDimension from './shogi/iterator/dimension/infinite.js'
import Piece from './shogi/piece.js'
import King from './shogi/piece/king.js'
import GoldGeneral from './shogi/piece/gold-general.js'
import SilverGeneral from './shogi/piece/silver-general.js'
import Knight from './shogi/piece/knight.js'
import Lance from './shogi/piece/lance.js'
import Bishop from './shogi/piece/bishop.js'
import Rook from './shogi/piece/rook.js'
import Pawn from './shogi/piece/pawn.js'

Object.assign(Piece, {
  King,
  GoldGeneral,
  SilverGeneral,
  Knight,
  Lance,
  Bishop,
  Rook,
  Pawn
})

Piece.all = Object.values(Piece)
Piece.all.forEach(piece => {
  Object.defineProperty(Piece.prototype, piece.name[0].toLowerCase() + piece.name.substring(1), {
    get() {
      return this.constructor === piece
    }
  })
})

Object.assign(IteratorDimension, {
  Finite: FiniteIteratorDimension,
  Infinite: InfiniteIteratorDimension
})

export default {
  Game,
  Player,
  Board,
  Cell,
  Piece,
  Iterator
}
