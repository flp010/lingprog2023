//função deve ser assincrona pois tem uma chamada sincrona dentro dela 
async function api() {
    //Recupera cep informado pelo usuario
    let cep = Number(document.getElementById("cep").value)
    //Vamos chamar a a api usando a função fetch do js
    //await é sicnrono, pois teremos que aguardar a resposta para continuar 
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    //Os dados chegaram no formato string, vamos converter em JSON
    let dados = await resposta.json()
    //coloca o logradouro no formulario
    document.getElementById("logradouro").value = dados.logradouro
    //coloca o bairro no formulario 
    document.getElementById("bairro").value = dados.bairro
    //coloca a localidade no formulario
    document.getElementById("localidade").value = dados.localidade
    //Coloca a localidade no formulario 
    document.getElementById("ibge").value = dados.ibge
}