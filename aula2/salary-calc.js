/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

// const salario = 55342;
//
// const fatoresDeReajuste = [
//     { salarioMaximo: 1500, fator: 0.20 },
//     { salarioMaximo: 1700, fator: .15 },
//     { salarioMaximo: 2000, fator: 0.10 },
//     { salarioMaximo: Infinity, fator: 0.05 }
// ];
//
// let fatorDeAumento = fatoresDeReajuste.find(aumento => salario < aumento.salarioMaximo).fator;
// let aumento = salario * fatorDeAumento;
// let novoSalario = salario + aumento;
//
// console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
// console.log(`Porcentagem de aumento: ${fatorDeAumento * 100}%`);
// console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
// console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);



const salario = 55342;

switch (true) {
    case (salario <= 1500):
        fatorDeAumento = .2;
        break;
    case (salario < 1700):
        fatorDeAumento = .15;
        break;
    case (salario < 2000):
        fatorDeAumento = .1;
        break;
    default:
        fatorDeAumento = .05;
}
let aumento = salario * fatorDeAumento;
let novoSalario = salario + aumento;

console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
console.log(`Porcentagem de aumento: ${fatorDeAumento * 100}%`);
console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);





const salario = 55342;

const fatoresDeReajuste = new Map([
    [1500, 0.20],
    [1700, .15],
    [2000, 0.10],
    [Infinity, 0.05]
]);

let fatorDeAumento = [...fatoresDeReajuste].find(([salarioMaximo, fator]) => salario < salarioMaximo)[1];
let aumento = salario * fatorDeAumento;
let novoSalario = salario + aumento;

console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
console.log(`Porcentagem de aumento: ${fatorDeAumento * 100}%`);
console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);


