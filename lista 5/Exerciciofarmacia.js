let principal = () => {
    let farmacia = []
    for(let i=0;i<3;i++){
        let objeto = {
            codigo: parseInt (prompt("Informe o Código")),
            nome: prompt("Informe o nome da farmacia"),
            endereço: prompt("Informe o endereço da farmacia")
        }
        while (farmacia.some((item) => item.codigo == objeto.codigo)){
            objeto.codigo = parseInt(prompt(`Informe o código da farmacia`))
        }
        farmacia.push(objeto)
    }
    let remedio = []
    for(let i=0;i<3;i++){
        let objeto = {
            codFarmacia: parseInt(prompt(`Codigo da Farmacia`)),
            NomeRemedio: prompt(`Informe o nome do remédio`),
            QtdEstoque: parseInt(prompt(`Entre com a quantidade em estoque`)),
            preco: parseFloat(prompt(`Preço do remédio`))
    }
    while (!farmacia.some((item) => item.codigo == objeto.codFarmacia)){
        objeto.codFarmacia = 
        parseInt(prompt(`Farmacia não existe. Informe novamento o código`))
    }
    let indice = remedio.findIndex( (item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
        if (indice == -1){ // remedio não existe
            remedio.push(objeto) // insere remédio
        }
        else { // já existe, atualiza estoque
            remedio[indice].qtde = remedio[indice].qtde + objeto.qtde
        }
    }
    // 5 vendas
    for (let i=0;i<5;i++){
        let venda = {
            farmacia: parseInt(prompt(`Informe o nome da farmacia`)),
            remedio: prompt(`Informe nome do remédio`),
            qtde: parseInt(prompt(`Informe a quantidade para compra`))
        }
        //Verifica se existem - some retorna true or false
        if (remedio.some((item) => 
        (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio))){
            //Recupera o indice do remédio - FindIndex retorna o indice do vetor 
            let indice = remedio.findIndex((item => 
            item.nome == venda.remedio && item.codFarmacia == venda.remedio))
            if (venda.qtde <= remedio[indice].qtde){
                //Atualiza o estoque 
                remedio[indice].qtde = remedio[indice].qtde - venda.qtde
                alert(`Compra realizada com sucesso`)
            } 
            else {
                alert(`Estoque insuficiente`)
            }
        }
    }
}