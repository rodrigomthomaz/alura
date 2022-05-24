console.log(`Trabalhando com condicionais \n`);
console.log(`teste`);
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`
);


const idadeComprador = 16;
const estaAcompanhada = true;

console.log(`Destinos possíveis:`);
console.log(`${listaDeDestinos}\n`);

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(0,1);
} else if (estaAcompanhada){
        console.log(`Comprador menor de idade mas está acompanhada`);
        console.log(`Pode comprar`);
        listaDeDestinos.splice(0,1);
        }
        else { 
        console.log(`Comprador menor de idade e desacompanhada`);
        console.log(`Não pode comprar`);
        }
console.log(listaDeDestinos);


