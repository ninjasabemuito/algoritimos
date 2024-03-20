//importando o modulo readline 
const readline = require ('readline')

//criando uma instância de interface de leitura e escrita 
const rl = readline.createInterface({
    input: process.stdin,
    outup: process.stdout
});

//solicitando ao usuario que insira sua idade
rl.question('qual a sua idade?', (idade) => {
    //exibindo a idade inserida pelo usuário 
    console.log("sua idade é:",idade);
    
    //fechando a interface de leitura 
    rl.close();
});