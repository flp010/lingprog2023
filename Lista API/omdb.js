async function api() {
    let titulo = (document.getElementById("titulo").value)
    //apiKey = 7d76574
let resposta = await fetch (`http://www.omdbapi.com/?t=${titulo}&apikey=7d76574`).then (response =>{return response.json()})
    document.getElementById("diretor").value = resposta.Director
    document.getElementById("ano").value = resposta.Year
    document.getElementById("poster").src = resposta.Poster
    document.getElementById("lançamento").value = resposta.Released
}