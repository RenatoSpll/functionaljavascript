// Exemplo de função impura

let pessoa = "Renato"

function dizerOla() {
    console.log('Olá, ' + pessoa +'!')
}

//dizerOla() // output -> Olá, Renato!


// Exemplo de função pura

pessoa  = 'João'

function Cumprimentar(pPessoa) {
    return 'Olá, ' + pPessoa + '!'
}

console.log(Cumprimentar(pessoa)) //output => 'Olá, Renato'


