const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digite o primeiro número:' , (numero1) => {
    rl.question('Digite o segundo número:' , (numero2) => {
        //calculando a soma 
        const resultado = Number(numero1) + Number(numero2);

        //Exibindo o resultado
        console.log(`a soma de ${numero1} e ${numero2} é ${resultado}`)
    })
})