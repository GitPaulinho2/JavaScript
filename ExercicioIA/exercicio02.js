let loja = [{nome: 'Mouse', preco: 25, categoria: 'Perifericos'},
            {nome: 'Teclado', preco: 80, categoria: 'Perifericos'},
            {nome: 'Monitor', preco: 200, categoria: 'Screen'}]


let relatorioPerifericos = loja
.filter(item => item.categoria === 'Perifericos')
.map(item => {
    let desconto = item.preco > 50
    let precoFinal = desconto ? item.preco * 0.9 : item.preco

    return{
        produto: item.nome,
        precoOriginal: item.preco,
        precoFinal: precoFinal
    }
})

console.log(relatorioPerifericos)