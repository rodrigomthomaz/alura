console.log("Trabalhando com listas");

const bahia = "Bahia";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
                                `Salvador`, 
                                `São Paulo`, 
                                `Rio de Janeiro`,
                                `${bahia}`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //Adicionando itens na lista

console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);