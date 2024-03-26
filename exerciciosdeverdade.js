function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a) O que vai ser impresso no console?
//ira ser impresso o resultado da multiplicação ou seja os numeros que irão aparecer no console é o 10 e o 50 
//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
//O terminal não executaria o codigo 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
//a. Explique o que essa função faz e qual é sua utilidade
//A função | toLowerCase | tem como função transformar as frases ou palavras que estão maiusculas em minusculas e o | includes | tem como função verificar se a palavras esta no comando acima, se a palavra estiver o terminal ira mostrar true se não o terminal ira mostrar false
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    // i.   Eu gosto de cenoura
    // ii.  CENOURA é bom pra vista
    // iii. Cenouras crescem na terra