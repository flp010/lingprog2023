function bike(){
    let vetor = []
    for(let i=1; i<3;i++){
        let objeto = {
            marca: prompt("Informe a marca"),
            modelo: prompt("Informe o modelo"),
            quadro: parseInt (prompt("Informe o quadro")),
            aro: parseInt(prompt("Informe o aro ")),
            ano: parseInt(prompt("Informe o ano")),
            preco: parseInt(prompt("Informe o preco"))
        }
        vetor.push(objeto)
        console.log(`Bike inserida com sucesso`)
    }
    for(let i=1;i<3;i++){
        let soma = 0 
        soma = soma + vetor[i].preco
        console.log(`A média é dos preços das bikes é ${soma/vetor[i].preco}`)
        }
        let MaisAntiga = []
        MaisAntiga[0] = vetor[0] 
        for (let i=1; i<3; i++){
            if (vetor[i].ano < MaisAntiga[0].ano){
                MaisAntiga = [] // Zera o vetor
                MaisAntiga[0] = vetor[i]
            }
            else if (vetor[i].ano == MaisAntiga[0].ano){
                MaisAntiga.push(vetor[i]) // Mais uma com o mesmo ano
            }
        }
        console.log(`Bike(s) mais antiga(s)`)
        console.log(MaisAntiga)
        //Bikes da marca caloi
        let caloi = []
        for(let i=1;i<3;i++){
            if (vetor[i].marca == `CALOI`){
                caloi.push(vetor[i])
            }
        }
        console.log(caloi)
        // Quantidade bikes aro 29
        let aro29 = 0
        for (let i=0;i<3;i++){
            if (vetor[i].aro == 29){
                aro29 ++
            }
            //Bike possui maior quadro, desconsederar empates
            let maiorQuadro = vetor[0]
            for(let i=1;i<3;i++){
                if(vetor[i].quadro > maiorQuadro){
                    maiorQuadro= vetor[i]
                }
            }
            console.log(maiorQuadro)
            
        }
}