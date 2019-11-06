// Process é a entrada e saída padrão, objeto disponível globalmente

const anonimo = process.argv.indexOf('-a') !== -1 /* Lendo FLAG a partir do process */
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo\n') 
    process.exit() // Matando o processo
} else {
    process.stdout.write('Informe seu nome: ') // STDOUT -> Saída padrão (console)
    process.stdin.on('data', data => {         // STDIN -> Entrada padrão (Teclado)
        const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit() // Matando o processo
    })
}