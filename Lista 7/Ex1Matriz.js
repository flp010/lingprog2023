function lerMatriz(matriz) {
    // 2 x 4 (2 linhas e 4 colunas)
    for (let i = 0; i < 3; i++) { // para cada linha
        matriz[i] = [] // cria um vetor dentro de um vetor
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseInt((Math.random() * 20) + 1) // gera número de 1 a 20
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0; j<5;j++){
            console.log(`matriz [${i}][${j}] = ${matriz[i][j]}`)
        }
    }
}
function calcula1520(matriz){
   let qtde = 0
   for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20){
                qtde++
            } 
        }
   }
   console.log(qtde)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    calcula1520(matriz)
    console.log(matriz)
}
principal();