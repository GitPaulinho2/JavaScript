// Aula06 - Array/listas - map
let lista = ['arroz', 'feijão', 'carne', 'azeite', 'Pão']

// lista.map((item) => { // map percorre os elementos da lista
//     console.log(item)
// })

let listaNotas = [7, 2, 5.3, 5, 3]

listaNotas.map((itemGenerico) => {
    let numero = itemGenerico + 1
    //console.log(numero)
})
console.log('o tamanho dessa lista é: ')
console.log(lista.length) // mostra o tamanho da lista 

lista.push('manteiga')
lista.push('detergente')

console.log('o novo tamanho é')
console.log(lista.length)