const fs = require('fs') // Importando FS(core)

// Criando Objeto
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Persistindo Objeto .. Gerando arquivo através do Core FS do Node
fs.writeFile(__dirname+ '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // Imprimir erro ou arquivo salvo
})

// JSON.stringfy = Transforma objeto em JSON
// Dirname = Diretório atual