let carros = [];
let notas = [];

function cadastrarCarros() {
    for (let i = 0; i < 4; i++) {
        let carro = {
            marca: prompt("Informe a marca do carro"),
            modelo: prompt("Informe o modelo do carro"),
            ano: prompt("Informe o ano do carro"),
            valor: parseFloat(prompt("Informe o valor do carro"))
        };

        carros.push(carro);

        notas[i] = [];
        for (let j = 0; j < 5; j++) {
            notas[i][j] = parseFloat((Math.random() * 5) + 1);
        }
    }

    console.log("Carros cadastrados com sucesso!");
}

function calcularMediaNotas() {
    for (let i = 0; i < carros.length; i++) {
        let soma = 0;
        for (let j = 0; j < notas[i].length; j++) {
            soma += notas[i][j];
        }
        let media = soma / notas[i].length;
        console.log(`Carro: ${carros[i].marca} ${carros[i].modelo} - Média de notas: ${media.toFixed(2)}`);
    }
}


function encontrarModeloMenorNota() {
    for (let j = 0; j < notas[0].length; j++) {
        let menorNota = notas[0][j];
        let modeloMenorNota = carros[0].modelo;
        for (let i = 1; i < carros.length; i++) {
            if (notas[i][j] < menorNota) {
                menorNota = notas[i][j];
                modeloMenorNota = carros[i].modelo;
            }
        }
        console.log(`Avaliação ${j + 1}: Modelo do carro com menor nota: ${modeloMenorNota}`);
    }
}

function encontrarAvaliacaoMenorMedia() {
    let menorMedia = calcularMediaAvaliacao(0);
    let avaliacaoMenorMedia = 0;
    for (let j = 1; j < notas[0].length; j++) {
        let media = calcularMediaAvaliacao(j);
        if (media < menorMedia) {
            menorMedia = media;
            avaliacaoMenorMedia = j;
        }
    }
    console.log(`Avaliação com menor média: ${avaliacaoMenorMedia + 1}`);
}

function calcularMediaAvaliacao(avaliacao) {
    let soma = 0;
    for (let i = 0; i < carros.length; i++) {
        soma += notas[i][avaliacao];
    }
    return soma / carros.length;
}

function principal() {
    let opcao;
    do {
        opcao = Number(prompt(`Informe a opção escolhida \n 1. Cadastrar carros \n 2. Calcular média das notas \n 3. Encontrar modelo com menor nota \n 4. Encontrar avaliação com menor média \n 5. Sair`));
        switch (opcao) {
            case 1:
                cadastrarCarros(carros);
                break;
            case 2:
                calcularMediaNotas(carros, notas);
                break;
            case 3:
                encontrarModeloMenorNota(carros, notas);
                break;
            case 4:
                encontrarAvaliacaoMenorMedia(carros, notas);
                break;
            case 5:
                alert(`Programa será encerrado`);
                break;
            default:
                alert(`Opção inválida!!!`);
        }
    } while (opcao != 5);
}
principal();
