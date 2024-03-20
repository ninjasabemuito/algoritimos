const maiorIdade = true 
const ensinoMedioCompleto = true 
const outraFaculdade = true 


if (maiorIdade && ensinoMedioCompleto && !outraFaculdade) {
    console.log('voce pode')
}else { 
    console.log('voce nao pode entra na faculdade')
}

const respostaDoUsuario = "90"
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { console.log("Passou no teste.")
 }else {
     console.log("Não passou no teste.") 
}
// a) o codigo serve para ver se o usuario passou ou não no teste
// b) todos os numeros pares ja que eles são divisiveis por zero
// c) numeros impares 

let fruta = maça
let preco = 2.25
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break; }
    // o codigo serve para mostrar o preço da fruta 
    // seu preço = 2.25
    // 
