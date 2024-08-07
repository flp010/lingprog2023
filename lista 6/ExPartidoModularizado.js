function CadastroPartidos(partido){
    let objeto = { //Cria objeto
        codigo: parseInt(prompt(`Informe o codigo do partido`)),
        nome: prompt(`Informe o nome do partido`),
        sigla: prompt(`Informe a sigla do partido`),
        NomePresidente: prompt(`Informe o nome do presidente`),
        NumrdePoliticos: parseInt(prompt(`Informe a quantidade de politicos`))
    }
    //Verifica se o código já existe ou menor que 0
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
function CadastroPoliticos(politico, partido){
    let objeto = {
        CodigoPartido: parseInt(prompt(`Informe o codigo do partido`)),
        NomePolitico: prompt(`Informe o nome do politico`),
        QtdVotos: 0,
        cargo: prompt(`Informe o cargo do fdp`)
    }
    while (!partido.some((item) => item.codigo == objeto.CodigoPartido)){
        objeto.CodigoPartido = 
        parseInt(prompt(`Partido não encontrado. Informe um novo`))
    }
    while (politico.some((item) => item.NomePolitico == objeto.NomePolitico)){
        objeto.NomePolitico = prompt(`Nome ja existe. informe outro nome`)
    }
    politico.push(objeto)
    alert(`Politico cadastrado com sucesso`)

} 
function votos(politico){
    let votacao = {
    partido: parseInt(prompt(`Informe o partido`)),
    candidato: prompt(`Informe o nome do candidato`)
    }
    let aux = politico.find((item) => item.CodigoPartido == votacao.partido & item.nome == votacao.candidato)
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
    function MaisVotado(CandidatoMaisVotado, politico){
        for(let i=0; i<politico.length; i++){
            if (politico[i].qtde > CandidatoMaisVotado.qtde){
            CandidatoMaisVotado = politico[i]
        }
        } 
        console.log(CandidatoMaisVotado) 
    }
    function principal(){
        let partido = []
        let politico = []
        let CandidatoMaisVotado = []

        let opcao
        do {
            opcao = Number(prompt(`Informe a opção escolhida \n 1. Cadastra Partido \n 2. Cadastra Politico \n 3. Votação \n 4. Resultado \n 5. Sair`))
                switch (opcao){
                    case 1: 
                    CadastroPartidos(partido);
                    break;
                    case 2:
                    CadastroPoliticos(politico);
                    break;
                    case 3:
                    votos(votacao, politico);
                    break;
                    case 4:
                    MaisVotado(CandidatoMaisVotado, politico);
                    break;
                    case 5:
                    alert(`Programa será encerrado`);
                    break; 
                    default: alert(`Opção inválida!!!`)                    
                }
        }
            while (opcao != 5) 
    }
     principal();
        
     