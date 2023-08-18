
// function getFaixaImc(pesoKg, alturaMetros) {
//     return checarFaixa(pesoKg / (alturaMetros * alturaMetros));
// }
//
// function checarFaixa(imc) {
//     switch (true) {
//         case imc < 18.5:
//             return `IMC ${imc.toFixed(2)} Abaixo do peso`;
//         case imc <= 24.9:
//             return `IMC ${imc.toFixed(2)} Peso ideal`;
//         case imc <= 29.9:
//             return `IMC ${imc.toFixed(2)} Pré-obesidade`;
//         case imc <= 34.9:
//             return `IMC ${imc.toFixed(2)} Obesidade grau I`;
//         case imc <= 39.9:
//             return `IMC ${imc.toFixed(2)} Obesidade grau II`
//         default:
//             return `IMC ${imc.toFixed(2)} Obesidade grau III`;
//     }
// }
//
// console.log(getFaixaImc(90, 1.85));



const FAIXAS_IMC = [
    {maximo: 18.5, mensagem: 'Abaixo do peso'},
    {maximo: 24.9, mensagem: 'Peso ideal'},
    {maximo: 29.9, mensagem: 'Pré-obesidade'},
    {maximo: 34.9, mensagem: 'Obesidade grau I'},
    {maximo: 39.9, mensagem: 'Obesidade grau II'},
    {maximo: Infinity, mensagem: 'Obesidade grau III'},
];

function calcularImc(pesoKg, alturaMetros) {
    return pesoKg /(alturaMetros * alturaMetros);
}

function getDescricaoFaixa(imc) {
    for (let faixa of FAIXAS_IMC) {
        if (imc <= faixa.maximo) {
            return `IMC ${imc.toFixed(2)} ${faixa.mensagem}`;
        }
    }
}

function calcularFaixa(pesoKg, alturaMetros){
    imc = calcularImc(pesoKg, alturaMetros);
    return getDescricaoFaixa(imc);
}

function teste() {
    console.log(calcularFaixa(90, 1.85));
}

teste();

