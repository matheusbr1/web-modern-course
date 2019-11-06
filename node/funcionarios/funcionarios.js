// Axios é um client HTTP que faz requisições pra obter informações de algo que está remoto
// Exemplo obter um JSON
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' 
const axios = require('axios') // importando Axios 

// Extraindo a mulher Chinesa com menor salário do arquivo JSON
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual // ? = então // : = caso contrário
}

// requisição em cima da URL para obter conteúdo
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})