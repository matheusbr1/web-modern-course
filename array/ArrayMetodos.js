const pilotos = ['Vettel', 'Alonso', 'Raikkonel', 'Massa']
pilotos.pop() // Massa quebrou o carro // Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona novo elemento na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento! 
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição [0]
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0 , 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array // recorta um array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)