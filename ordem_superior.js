// Funções de ordem superior
//funções que podem receber ou retornar outras funções, funções compostas

let pessoa = 'Renato'

function definirAcao(pPessoa, acao) {
    if(acao) {
        return acao(pPessoa)
    }
     return 'Nada foi feito'
}

function fritarOvo(pessoa) {
    return pessoa + ' fritou ovo'
}

let OQueFoiFeito = definirAcao(pessoa, fritarOvo)
console.log(OQueFoiFeito)
//output => 'Renato fritou ovo'


const vetor = [1, 2, 3, 4, 5]

function somar10(valor) {
    return valor + 10
}
const vetorMais10 = vetor.map(somar10)

console.log(vetorMais10)
//output => [ 11, 12, 13, 14, 15 ]


const Pares = (valor) => ( valor%2==0 )

const vetorDePares = vetorMais10.filter(Pares)

console.log(vetorDePares)

//output => [ 12, 14 ] 

function soma(valor1, valor2) {
    return valor1 + valor2
}

const vetorMais1 = vetorMais10.map(function(elemento) {
    return soma(elemento, 1)
})

console.log(vetorMais1)