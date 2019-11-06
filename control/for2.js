const notas = [6.7,7,8,9,10,0]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Matheus',
    idade: 20,
    Empresa: 'Neurovirtual'
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa [atributo]}`)
}