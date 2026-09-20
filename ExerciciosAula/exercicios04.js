// let listaAlunos = ['Pedro','Henrique','Maria','Gessica','Carlos']

// listaAlunos.push('Diego')

// if (listaAlunos.length > 6){
//     console.log('Não é possivel adicionar mais um aluno! Limite de 6 por turma')
// }else{
//     console.log('Bem vindo a turma 3A!')
// }

let listaAlunos = ['Pedro','Henrique','Maria','Gessica','Carlos']
let alunoNovo = 'Diego'

if(listaAlunos.length < 6){
    listaAlunos.push(alunoNovo);
    console.log('Adicionou aluno')
}else{
    console.log('Atingiu limite maximo de alunos')
}