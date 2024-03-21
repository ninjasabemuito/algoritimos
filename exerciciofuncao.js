function imprimiaFrase(){
    console.log('ola mundo')
}
imprimiaFrase()

function imprimaTrase(nome){
    console.log(`ola ${nome}!`)
}
imprimaTrase(`xandao`)

let nota1
let nota2
let nota3
function notas(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3)/3
    console.log(media)
}
notas(30, 20, 10)


function calculaMedia (nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3
    console.log(media.toFixed(2))//toFixed serve para deixar os números inteiros, temos como exemplo essa divisão para chegar em uma media, se tiramos o toFixed ele da um número quebrado 
}
calculaMedia(10,60,85)

function verificaNumero(numero){
    if(numero % 2 === 0) {
        console.log(`O numero ${numero} é par.`)
    } else {
        console.log(`o numero ${numero} é impar`)
    }
}
verificaNumero(10000)