// Funcão literal 
function fun1(){}

// Armazenar em Variável
const fun2 = function() {}

// Armazenar em um array
const array = [function (a , b) {return a + b}, fun1 , fun2]
console.log(array[0](5,5))

// Armazenar uma função em objeto 
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}
run(function() {console.log('Executando ...')})

// Uma função pode retornar/conter uma função 
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(5,5)(5)