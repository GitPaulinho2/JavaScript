let listaDeCompras = ['arroz','feijão','sabão']
let itemDesejado = 'leite'


if(listaDeCompras.includes(itemDesejado)){
        console.log('o item '+itemDesejado+' já esta na lista')

    }else{
        listaDeCompras.push(itemDesejado)
        console.log('Item '+itemDesejado+' adicionado com sucesso!')
    }


console.log(listaDeCompras)
