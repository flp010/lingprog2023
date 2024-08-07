function soma(a, b){
   console.log(`Soma é ${a+b}`)
}
function soma2(a,b){
    return (a+b)
}
function soma3(){
    let a = parseInt(prompt(`Informe o valor de a`))
    let b = parseInt(prompt(`Informe o valor de b`))
    return a + b
}
function alteraidade(idadeP){
    idadeP = idadeP + 10
    console.log(`Dentro da função ${idadeP}`) // 28
}
function alteravetor(vet){
    vet[0] = vet[0] + 10
    vet[1] = vet[1] + 10
    vet[2] = vet[2] + 10
    console.log(`Dentro da função ${vet}`)
}
function principal (){
    soma (4,8)
    console.log(`Soma é ${soma2 (6,9)}`)
    console.log(`soma é ${soma3()}`)

    //Passagem de parametro por valor -> passa-se o valor da variavel 
    // qual o efeito colateral disso?
    // a mudança do valor da variavel dentro da função não altera a variavel 
    // de fora da função
    // OBS: vale quando se passa como parametro um inteiro um int, um float, um boolean ou um char
    // ou seja, um tipo primitivo de dados
    let idade = 18
    alteraidade(idade)
    console.log(idade) // 18

    //passagem de parametro por referencia -> passa-se a referencia da variavel 
    //qual o efeito colateral disso 
    //a mudança do valor da variavel dentro da função altera a variavel 
    //de fora da função 
    //OBS: vale quando se passa como parametro um vetor, uma matriz ou um objeto

    let vet = []
    vet[0] = 10; vet[1] = 11; vet[2] = 12
    alteravetor(vet)
    console.log(`Fora da função ${vet}`)
}
//Vantagens da modularização : organiza, separa, diminui o acoplamento das funções, facilita a programação em pares 
//Facilita o desenvolvimento em equipe 
//manutenção do codigo 
