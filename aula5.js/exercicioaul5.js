const variavel1 = 100
const variavel2 = 300

console.log(variavel1 === variavel2)//false
console.log(variavel1 !== variavel2)//true
console.log(variavel1 > variavel2)//false
console.log(variavel1 < variavel2)//true

//exercicio 2:
const a = true 
const b = false
const c = true

a && b//false
b && c //false
a && c //true
a && b && c //false

console.log(a && b)//false
console.log(b && c)//false
console.log(a && c)//true
console.log(a && b && c)//false

//exercicio 3:

const vA = true
const vB = false
const vC = true

console.log(vA || vB)//true
console.log(vB || vC)//true
console.log(vA || vC)//true
console.log(vA || vB || c)//true