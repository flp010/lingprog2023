function cadastroFarmacia(farmacia) {
    let objeto = {
        codigo: parseInt(prompt("Informe o Código")),
        nome: prompt("Informe o nome da farmacia"),
        endereço: prompt("Informe o endereço da farmacia")
    }
    while (farmacia.some((item) => item.codigo == objeto.codigo)) {
        objeto.codigo = parseInt(prompt(`Codigo invalido, informe novamente`))
    }
    farmacia.push(objeto)
}
function cadastroRemedio(remedio, farmacia) {
    let objeto = {
        codFarmacia: parseInt(prompt(`Codigo da Farmacia`)),
        NomeRemedio: prompt(`Informe o nome do remédio`),
        QtdEstoque: parseInt(prompt(`Entre com a quantidade em estoque`)),
        preco: parseFloat(prompt(`Preço do remédio`))
    }
    while (!farmacia.some((item) => item.codigo == objeto.codFarmacia)) {
        objeto.codFarmacia =
            parseInt(prompt(`Farmacia não existe. Informe novamento o código`))
    }
    let indice = remedio.findIndex((item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
    if (indice == -1) { // remedio não existe
        remedio.push(objeto) // insere remédio
    }
    else { // já existe, atualiza estoque
        remedio[indice].qtde = remedio[indice].qtde + objeto.qtde
    }
}
function venda(remedio) {
    let venda = {
        farmacia: parseInt(prompt(`Informe o nome da farmacia`)),
        remedio: prompt(`Informe nome do remédio`),
        qtde: parseInt(prompt(`Informe a quantidade para compra`))
    }
    //Verifica se existem - some retorna true or false
    if (remedio.some((item) =>
        (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio))) {
        //Recupera o indice do remédio - FindIndex retorna o indice do vetor 
        let indice = remedio.findIndex((item =>
            item.nome == venda.remedio && item.codFarmacia == venda.remedio))
        if (venda.qtde <= remedio[indice].qtde) {
            //Atualiza o estoque 
            remedio[indice].qtde = remedio[indice].qtde - venda.qtde
            alert(`Compra realizada com sucesso`)
        }
        else {
            alert(`Estoque insuficiente`)
        }
    }
}
function principal() {
    let farmacia = []
    let remedio = []
    let opcao
    do {
        opcao = Number(prompt(`Informe a opção escolhida \n 1. Cadastra farmacia \n 2. Cadastro remédio \n 3. venda \n 4. Sair`))
        switch (opcao) {
            case 1:
                cadastroFarmacia(farmacia);
                break;
            case 2:
                cadastroRemedio(remedio, farmacia);
                break;
            case 3:
                venda(remedio);
                break;
            case 4:
                alert(`Programa será encerrado`);
                break;
            default: alert(`Opção inválida!!!`)
        }
    }
    while (opcao != 4)
}
principal()
