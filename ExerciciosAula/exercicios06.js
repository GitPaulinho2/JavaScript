// function aluno(porcentagemDePresenca, nota1, nota2){
//     let media = (nota1 + nota2) / 2

//     if (porcentagemDePresenca >= 75 && media >= 6){
//         console.log('Parabéns, você passou!')
//         console.log('Porcentagem de Presença: '+porcentagemDePresenca+'%')
//         console.log('Media: '+media)
//     }else{
//         console.log('Você Reprovou!')
//         console.log('Porcentagem de Presença: '+porcentagemDePresenca+'%')
//         console.log('Media: '+media)
//         return media
//     }
// }

// aluno(75, 6, 6)


function avaliarAluno(porcentagemDePresenca, notaA, notaB){
    let media = (notaA + notaB)/2
    if(media >= 6 && porcentagemDePresenca >= 75){
        return 'Passou'
    }else{
        return 'Reprovou'
    }
}

console.log(avaliarAluno(75,6,10))

//Outro metodo de fazer 
// let avaliacaoDoAluno = avaliarAluno(65,6,10)
// console.log(avaliacaoDoAluno)