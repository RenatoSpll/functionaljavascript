//Currying 
//é um forma de informar para uma função os parâmetros de forma parcial

function primeiraFuncao(valor1, valor2) {
    return valor1 + valor2
}

console.log(primeiraFuncao(1, 2))

function funcComCurry(valor1) {
    return function(valor2) {
        return valor1 + valor2
    }
}

const retorno = funcComCurry(12)
const soma = retorno(10)

console.log(soma) //output => 22

// function funcComCurry2(valor1) {
//     return function(valor2) {
//         return function(valor3) {
//             return valor1 * valor2 * valor3
//         }
//     }
// }

const r1 = funcComCurry2(2)
const r2 = r1(3)
console.log(r2(10)) //output => 60
console.log(funcComCurry2(2)(5)(4)) //output => 40


// function funcComCurry2(valor1) {
//     function func1(valor2) {
//         function func2(valor3) {
//             return valor1 * valor2 * valor3
//         }

//         return func2
//     }

//     return func1
// }

function funcComCurry2(valor1) {
    return valor2 => valor3 => valor1 * valor2 * valor3
    
}
