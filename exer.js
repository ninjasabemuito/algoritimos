function somaDois (a, b) {
    let soma = a + b
    return soma
}
let resultado = somaDois(38, 2)
console.log(resultado + 88)

function mediaDosNumeros (num1, num2) {
    let media = (num1 + num2)/2
    console.log(media)
}
media(10,20,30)

let numeroPar = (numero) => {
    if ((numero % 2) === 0 ){
        console.log(`esse número é par`)
    } else {
        console.log(`esse numero é imper`)
    }
}
