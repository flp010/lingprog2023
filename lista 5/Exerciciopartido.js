function partidos(){
    let partido = []
        for(let i=0;i<5;i++){
            let objeto = { //Cria objeto
                codigo: parseInt(prompt(`Informe o codigo do partido`)),
                nome: prompt(`Informe o nome do partido`),
                sigla: prompt(`Informe a sigla do partido`),
                NomePresidente: prompt(`Informe o nome do presidente`),
                NumrdePoliticos: parseInt(prompt(`Informe a quantidade de politicos`))
            }
            //Verifica de o código já existe ou menor que 0 (some retorna true ou false, find retorna o elemento)
            while (partido.some((item) => item.codigo == objeto.codigo || objeto.codigo < 0)){
                objeto.codigo = parseInt(prompt(`Código já existe. Informe novo codigo`))
                
            }
            while (partido.some((item) => item.sigla == objeto.sigla)){
                objeto.sigla = (prompt(`Sigla ja existe. Informe nova sigla`))
            }
            partido.push(objeto) //Insero o objeto no vetor
            alert(`Partido cadastrado com sucesso`)
        }
        // Cadastrar os politicos 
    let politicos = []
        for(let i=0; i<5; i++){
            let objeto = {
                CodigoPartido: parseInt(prompt(`Informe o codigo do partido`)),
                NomePolitico: prompt(`Informe o nome do politico`),
                QtdVotos: 0,
                cargo: prompt(`Informe o cargo do fdp`)
            }
            while (!partidos.some((item) => item.codigo == objeto.CodigoPartido)){
                objeto.CodigoPartido = parseInt(prompt(`Partido não encontrado. Informe um novo`))
            }
            while (politicos.some((item) => item.NomePolitico == objeto.NomePolitico)){
                objeto.NomePolitico = prompt(`Nome ja existe. informe outro nome`)
            }
            politicos.push(objeto)
            alert(`Politico cadastrado com sucesso`)
        }  
        for(let i=0;i<10;i++){
            let votacao = {
                partido: parseInt(prompt(`Informe o partido`)),
                candidato: prompt(`Informe o nome do candidato`)
            }
            let aux = politicos.find((item) => item.CodigoPartido == votacao.partido & item.nome == votacao.candidato)
            if (aux != undefined){
                //achou
                aux.QtdVotos ++ 
                alert(`Votação realizada com sucesso`)
            }
            else{
                alert(`Partido e/ou candidato não existe`)
            }
        }
        //Candidato com mais votos 
        let CandidatoMaisVotado = politicos[0]
        for(let i=0; i<politicos.length; i++){
            if (politicos[i].qtde > CandidatoMaisVotado.qtde){
                CandidatoMaisVotado = politicos[i]
            }
        }
        console.log(CandidatoMaisVotado)         
}

    
