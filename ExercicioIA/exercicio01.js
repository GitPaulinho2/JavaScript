let notas = [7.5, 8.0, 6.0, 9.0]
let soma = notas.reduce((acc, nota) => acc + nota, 0)
let media = soma / notas.length;

let situacao = ''
function calcularMedia(notas){
        if(media >= 7){
            situacao = 'Aprovado'
        }else if(media >= 5){
            situacao = 'Recuperação'
        }else{
            situacao = 'Reprovado'
        }

        console.log('Media: '+media.toFixed(1)+ ' - '+' Situação: '+situacao)
    }

calcularMedia(notas)
