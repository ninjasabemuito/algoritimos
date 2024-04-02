
const cor = 'Amarelo'
const nome2 = 'xandãoéfodaessecaraémito'
console.log("Meu nome é " + nome2 + " e tenho " + cor + " anos ")
console.log(`Meu nome é ${nome2}, e eu gosto da cor ${cor}.`)

//propriedade length
/* a propriedade length nos diz qual é o tamanho de uma string, incluindo espaços*/
const nome = 'Leonardode Souza'
console.log(nome.length)
//Método tolowererCase
//o método toLowerCase transforma todas as letras da sua string em minúscula
const frase = 'OIeeEeE!'
const fraseMiniscula = frase.toLocaleLowerCase()
//fraseMinuscula = oieeeee!
const frase = 'OIeeEeE!'
const fraseMaiuscula = frase.toUpperCase()
//fraseMaiuscula = OIEEEEE!
//Método trim
//O método trim() retira os espaços que existem antes e depois da sua string 
//Útil em formulários como por exemplo de login!
const email = "  mika@gmail.com  "

console.log(email.trim())
//mika@gmail.com

//Método includes 
/* O método includes(caracteres) determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false*/
const frase ='Hoje eu comi cenoura'
console.log(frase.includes("cenoura"))//true
console.log(frase.includes("batata"))//false
/*Método replaceAll(chars1, chars2)
O método replaceAll(chars1, chars2) troca todas as ocorrências de um conjunto de caracteres (chars1) por alguma outra coisa (chars2)*/
const frase ="Hoje eu comi cenoura,adoro cenouro"
const novaFrase = frase.replaceAll("cenoura", "batata")
//novaFrase = Hoje eu comi batata,adoro batata