import Shogi from '../index.js'

const game = new Shogi.Game('Jane', 'Serge')

game.start()

game.move(
  game.board.cell(0, 6),
  game.board.cell(0, 5)
)
