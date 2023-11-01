function lerMatriz(matriz) {
    // 2 x 4 (2 linhas e 4 colunas)
    for (let i = 0; i < 2; i++) { // para cada linha
        matriz[i] = [] // cria um vetor dentro de um vetor
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt((Math.random() * 20) + 1) // gera número de 1 a 20
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(`matriz [${i}][${j}] = ${matriz[i][j]}`)
        }
    }
}
function calcula1220(matriz) {
    for (let i = 0; i < 2; i++) {
        qtde = 0
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20) {
                qtde++
            }
        }
        console.log(`A quantidade de números entre 12 e 20 na linha [${i}] é ${qtde}`)
    }
}
function mediaPares(matriz) {
    let pares = [];
    let somaPares = 0;
    let contadorPares = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] % 2 === 0) {
                pares.push(matriz[i][j]);
                somaPares = somaPares + matriz[i][j];
                contadorPares++;
            }
        }
    }
    if (contadorPares > 0) {
        const media = somaPares / contadorPares;
        console.log(`Números pares: ${pares}`);
        console.log(`Soma dos pares: ${somaPares} será dividido por: ${contadorPares}`);
        console.log(`Média dos números pares: ${media}`);
    } else {
        console.log('Não há números pares na matriz.');
    }
}
principal = () => {
    let matriz = []
    lerMatriz(matriz);
    calcula1220(matriz);
    mediaPares(matriz);
}
principal()
