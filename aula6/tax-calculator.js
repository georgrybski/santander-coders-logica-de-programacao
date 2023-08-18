/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas
  expressa em porcentagem e custo, que é o custo de um item antes do imposto.
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/


function somaImposto(taxaImposto, custo) {
    return {custoAntesImposto: custo , porcentagemImposto: taxaImposto, custoDepoisImposto: custo * (1 + (taxaImposto / 100))};
}

console.log(somaImposto(10, 150));
console.log(somaImposto(25, 150));
console.log(somaImposto(50, 150));
console.log(somaImposto(75, 150));
console.log(somaImposto(100, 150));
