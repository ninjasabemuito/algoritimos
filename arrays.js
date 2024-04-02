/*Arrays nada mais são do que lists de elementos
ex: lista de compras, lista de alunos, lista de números da loteria, lista telefônica...

No javascipt, usamos colchetes para agrupar os itens de uma lista:  */
const listaDeCompras1 = ["batata", "alface", "queijo"]
const listaDeNumerosMega =[2, 13, 26, 35, 41, 60]
//acessando um elemento 
//Mas no caso dos arrays, a numeração não começa no 1, mas sim no 0 
//Para acessar um item, colocamos a sua posiçaão (índice) entre colchetes após o nome do array 

const listaDeCompras = ["abacate", "alface", "tomate"]
const segundoItem = listaDeCompras[2]
console.log(segundoItem)
console.log(listaDeCompras[0])

//Propriedade length
//A propriedade length nos diz qual é a quantidade de itens
const pokemon = ["bulbassauro", "aquirtle", "charmander"]
console.log(pokemon.length)//3

const serieBoas = ["Flash", "Dragon ball"]
seriesBoas.includes("Flash")//true
seriesBoas.includes("Naruto")//false
/*Método push(elemento)
O método push (elemento) adiciona um ou mais elementos ao final de um array*/

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros)//[1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros)//[1, 2, 3, 4, 5, 6, 7]

//Método
//O método pop() remove o último elemento de um array
const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()
console.log(meusPeixes)//["palhaço", "mandarim"]

//Método splice
//O método splice(i, n) remove n elementos à partir da posição i do array
const letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
//índices(i)     0    1    2    3    4    5    6    7
letras.splice(2, 1)
//       letras = ["A", "B", "D", "E", "F", "G", "H"]
//       indices(i)  0    1    2    3   4    5    6

letras.splice(3, 2)//letras = ["A", "B", "D", "G", "H"]