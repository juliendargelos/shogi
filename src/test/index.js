import Shogi from '../index.js'

const game = new Shogi.Game('Jane', 'Serge')

game.start()

console.log(game.move([0, 6], [0, 5]))
//console.log(game.board.cell(0, 5))
