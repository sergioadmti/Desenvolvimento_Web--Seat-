


const aluno01 = {
    nome: "juca",
    nota01: 7.2,
    nota02: 6.3,
    nota03: 5.3,
    nota04: 1.7
}

const mediaAluno = (aluno01.nota01 + aluno01.nota02 + aluno01.nota03 + aluno01.nota04) / 4

if(mediaAluno >= 7.0) {
    console.log(`A média das notas é: ${mediaAluno}. O aluno está aprovado.` )
}else {
        console.log(`A média das notas é: ${mediaAluno}. O aluno não obteve nota para aprovação.`)
    }
