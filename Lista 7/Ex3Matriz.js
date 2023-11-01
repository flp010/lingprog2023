function lerMatriz(matriz) {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseInt((Math.random() * 50) + 1)
        }
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++)
            console.log(`matriz [${i}][${j}] = ${matriz[i][j]}`)
    }
}
function maiorElemento(matriz) {
    let maior = matriz[0][0]
    let linha = 0
    let coluna = 0

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j]
            }
        }
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] == maior) {
                linha = i
                coluna = j
            }
        }
    }
    console.log(`O maior elemento da matriz é: ${maior}`)
    console.log(`A posição do maior elemento é [${linha}] [${coluna}]`)

}
function menorElemento(matriz){
    let menor = matriz[0][0]
    linha = 0 
    coluna = 0 
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (matriz[i][j] < menor){
                menor = matriz[i][j]
                linha = i
                coluna = j 
            }
        }
    }
    console.log(`O menor elemento da matriz é: ${menor}`)
    console.log(`A posição do menor elemento é [${linha}] [${coluna}]`)
}
principal = () => {
    let matriz = []
    lerMatriz(matriz);
    maiorElemento(matriz);
    menorElemento(matriz, maior);
}
principal()