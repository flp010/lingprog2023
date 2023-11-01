function lerDados(vetor, matriz){
    for(let i=0;i<15;i++){
        vetor[i] = "Aluno" + (i+1)
        matriz[i]=[]
        for(let j=0;j<5;j++){
            matriz[i][j] = parseFloat((math.random()*10)+1)
        }
    }
}
function calculaSituacao(vetor, matriz){
    for(let i=0; i<15;i++){
        let soma = 0 
        for(let j=0;j<15;j++){
            soma = soma + matriz[i][j]

            if (soma / 5 >= 6){
                console.log(`Aluno ${vetor[i]} foi aprovado com média ${(soma/5).toFixed(1)}`)
            }
            else if(soma / 5 >=3){
                console.log(`${vetor[i]} ficou de exame com média ${(soma/5).toFixed(1)}`)
            }
            else{
                console.log(`${vetor[i]} foi aprovado com média ${(soma/5).toFixed(1)}`)
            }
        }
    }
}
function calculaMediaFinal(matriz){
    let soma = 0 
    for(let i=0;i<15;i++){
        for (let j=0;j<5;j++){
            soma = matriz[i][j]
        }
    }
    console.log(`Média da turma é ${(soma/75).toFixed(1)}`)
}
function principal(){
    let vetor = []
    let matriz = []
    lerDados(vetor, matriz);
    calculaSituacao(vetor, matriz);
    calculaMediaFinal(matriz)
}
principal()
