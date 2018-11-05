import Shogi from '../index.js'

const game = new Shogi.Game('Jane', 'Serge').start()

// console.log(game.move(
//   game.board.cell(0, 6),
//   game.board.cell(0, 5)
// ))

console.log(game.board.cell(0, 6))
console.log(game.movements(game.board.cell(0, 6)))

//console.log(game.board.cell(0, 6), game.board.cell(0, 5))
