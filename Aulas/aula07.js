// Aula07 - booleano/operador and(e)/operador or(ou)/operador not
let podeDirigir = true
let stringTrue = 'true'

// console.log(' o tipo da variavel podeDirigir é: '+typeof podeDirigir)
// console.log(' o tipo da variavel stringTrue é: '+typeof stringTrue)

let nome1 = 'Joao'
let nome2 = 'Ana'

//console.log(nome1 == nome2) // == funciona como comparação

let ehIgual = nome1 == nome2
//console.log(ehIgual)

let numeroA = 20
let numeroB = 15
let comparacao = (numeroA == numeroB)

// console.log('os numeros são iguais? '+comparacao)

// console.log('10 é maior do que 20? ')
// console.log(10>20)

let comparacaoDois = (15 < 200)
//console.log('15 é menor do que 200? '+comparacaoDois)

let lista = ['elemento A', 'elemento B']

let inclui = lista.includes('elemento B') // retorna se um array tem ou não um certo elemento
//console.log(inclui)

let nota1 = 90
let nota2 = 70
let nota3 = 61
let nota4 = 100

let passou = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4 > 60)

//console.log('o aluno passou de ano? '+passou)

let nome = 'joao'
let sobrenome = 'carlos'

let ehJoaoCarlos = (nome == 'joao' && sobrenome == 'carlos')
//console.log('esse nome é joao carlos? -> '+ ehJoaoCarlos)

// |-----------------------------------------------------------| 

let passouNoEnem = true
let passouNoVestibularProprio = true
let ehTransferencia = true

let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibularProprio == true || ehTransferencia == true)

//console.log('entrou na faculdade? '+entrouNaFaculdade)

// ||-----------------------------------------------------------|

//true
let passouEmMatematica = true

// false
passouEmMatematica = !passouEmMatematica

//true
passouEmMatematica = !passouEmMatematica

console.log(passouEmMatematica)