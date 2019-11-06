const porta = 3003 // Porta utilizada

const express = require ('express') // importando Express
const app = express() // instanciando Express
const bancoDeDados = require('./bancoDeDados') // importando banco de dados

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// função middleware
/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
}) */

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}.`)
})