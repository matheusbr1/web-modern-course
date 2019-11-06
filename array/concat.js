const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uescloei']
const todos = filhos.concat(filhas, 'Fulano') // concatenando e inserindo mais um elemento

console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3,4], 5, [[6,7]])) // concatenando matrizes