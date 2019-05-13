//Closures
//são funções que se lembram do escopo léxico que foram criadas

function minhaFuncao() {
    
    var local = 'minhaFuncao()'
    
    function onde() {
        console.log('Estou em '+local)
    }

    onde()
}

//onde() //output => ReferenceError: onde is not defined
minhaFuncao() //output => 'Estou em minhaFuncao()'



function OutraFuncao() {
    
    var local = 'OutraFuncao()'
    
    function onde() {
        console.log('Estou em '+local)
    }

    return onde
}

//objeto que combina a função e as variáveis que estavam no escopo no momento em que a função foi criada
var ondeEstou = OutraFuncao() 

ondeEstou() //output => Estou em OutraFuncao()

function criarSoma(x) { // função fábrica
    return function(y) {
      return x + y
    };
}
  
var soma5 = criarSoma(5)
var soma10 = criarSoma(10)
  
console.log(soma5(2))  // 7
console.log(soma10(2)) // 12
