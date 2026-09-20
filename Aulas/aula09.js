let notaFinal = 60

if(notaFinal >= 60){
    console.log('Passou!')
}else if(notaFinal < 60 && notaFinal >= 30){
    console.log('Recuperação!')
}else{
    console.log('Reprovado!')
}

let pagouBoleto = true
let venceu = false 

if(pagouBoleto == true && venceu == false){
    console.log('Compra confirmada')
}else if(pagouBoleto == false && venceu == false){
    console.log('Aguardando pagamento')
}else if(venceu == true){
    console.log('Compra cancelada')
}