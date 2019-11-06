const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

// retornar somente produtos caros (acima de 500) e frágeis

const caro = produto => produto.preco >= 500 // Arrow Function que retorna preço
const fragil = produto => produto.fragil // Arrow Function que retorna frágil

console.log(produtos.filter(caro).filter(fragil))