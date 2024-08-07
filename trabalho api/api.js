async function api(){
    let post= (document.getElementById("postNum").value)
    let resposta = await fetch (`https://jsonplaceholder.typicode.com/posts/${post}`).then (response =>{return response.json()})
    
    document.getElementById("titulo").value = resposta.title
    document.getElementById("idusuario").value = resposta.userId
    document.getElementById("corpo").value = resposta.body
}
