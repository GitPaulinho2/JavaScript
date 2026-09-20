// Cria as listas
let frutas = ['Maçã','Banana','Kiwi','Ameixa','Abacaxi']
let listaCompras = []

// Usando o push, adiciono elementos na minha lista vazia
listaCompras.push('Coxinha')
listaCompras.push('Banana')
listaCompras.push('Kiwi')
listaCompras.push('Ameixa')

// Crio uma variavel pra definir a quantidade de frutas
let numeroDeFrutas = 0

// Usando o map, percorro a lista inteira com o meu elemento generico "coiso"
// e com o includes, retorno se a lista tem os elementos que preciso da outra lista
listaCompras.map((coiso) => {
    if(frutas.includes(coiso)){
        numeroDeFrutas = numeroDeFrutas + 1
    }
})



// Verificando se eu tenho 3 ou mais frutas
if(numeroDeFrutas >= 3){
// se tiver, ignora o else e printa a mensagem 
    console.log('Tenho 3 ou mais frutas')
// se não tiver, retorno essa mensagem de erro
}else{
    console.log('Preciso de mais frutas')
}