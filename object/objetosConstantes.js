// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'} 

// Congela o objeto
Object.freeze(pessoa)

pessoa.nome= 'Lúcio'
console.log(pessoa)