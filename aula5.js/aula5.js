const variavel1 = 50 
const variavel2 = 20 
//igual === verefica se dois valores sao iguais
//diferente !== verifica se dois valores sao diferentes
console.log(variavel1 === variavel2)
//isso remete a false e true no terminal
console.log(variavel === (2*25))//true
console.log(variavel1 === 50 )//true
console.log(variavel === variavel2)//false
console.log(variavel1 !== variavel2)//true
//maior > verifica se o valor da esquerda é maior que o da esquerda 
//maior ou igual >= verifica se o valor da esquerda é maior ou igual do valor da direita 
console.log(variavel1 > variavel2)//true
console.log(variavel2 > variavel1)//false
console.log(variavel1 >= variavel2)//true
console.log(50 >= 20)//true
console.log(50 >= 50)//true
console.log(20 >= 50)//false
//menor < verifica se o valor da esquerda é menor do que o da direita 
console.log(variavel1 < variavel2)//false
console.log(23 < 90)//true
//menor ou igual <= verifica se o valor da esquerda é menor ou igual do da direita
console.log(variavel1 <= variavel2)//false
console.log(variavel1 <= 50)//true


//operador E (AND) && retorna true se, e somente se, os todos boleanos envolvidos também forem true

true && true//true
false && true//false
true && false//false
false && false//false

const var1 = 50
const var2 = 50
const var3 = 20 

console.log(var1 === var2 && var1 > var3)//os dois comandos são true sendo assim ele pode ser visto dessa forma true && true
//operador OU(OR) ||
//retorna false se, e somente se, todos boleanos envolvidos também forem false
//diquinha do xandinho: este comando é basicamente o contrario do outro, o outro se tivesse false e true ou false e false, ele dava false e esse se tiver false e true ou true e true ele da true 
true || true//true
false || true//true
true || false//true
false || false//false
//operador Não (NOT) !
//sempre retorna o boleano oposto

!true //false
!false //true
