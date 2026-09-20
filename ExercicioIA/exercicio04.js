let notasTurma = [5, 8, 4, 7, 9, 6, 3]
let notaMinima = 6

function contarAprovados(notasTurma, notaMinima){
    let quantidadeAprovados = 0

    // i=0 => define o indice inicial na posição 0
    // i<listaNotas.length => mantem executando o ciclo enquanto i for menor do que o tamanho da lista
    // i++ => incrementa o valor de i em 1 no final de cada volta
    for(let i=0;i<notasTurma.length;i++){
        if(notasTurma[i] >= notaMinima){
            quantidadeAprovados = quantidadeAprovados + 1 // ou quantidadeAprovados += 1/ quantidadeAprovados++
        }
    }
    console.log('Total de alunos aprovados '+quantidadeAprovados)
}

contarAprovados(notasTurma, notaMinima)