// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

// let numList = [1,2,3,4,5,6,7,8,9];
//
// function separateNumbers(numList) {
//     let oddList = [];
//     let evenList =[];
//     for (let i = 0; i < numList.length ; i++) {
//         if (isOdd(numList[i])) {
//             oddList.push(numList[i]);
//             continue;
//         }
//         evenList.push(numList[i])
//     }
//     return {evenlist: evenList, oddList: oddList};
// }
//
// function isOdd (number) {
//     return number & 1 === 1;
// }
//
// console.log(separateNumbers(numList));
//
// function getOddAndEvenNumberLists(mixedNumberList) {
//     let oddList =[];
//     let evenList = [];
// }

// const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function separateNumbers(numList) {
//     const oddList = numList.filter(isOdd);
//     const evenList = numList.filter(num => !isOdd(num));
//     return { evenList, oddList };
// }
//
// function isOdd (number) {
//     return number & 1 === 1;
// }
//
// console.log(separateNumbers(numList));



//
// const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function separateNumbers(numList) {
//     const evenList = [];
//     const oddList = [];
//
//     numList.forEach(num => {
//         isOdd(num) && oddList.push(num);
//         !isOdd(num) && evenList.push(num);
//     });
//
//     return { evenList, oddList };
// }
//
// function isOdd(number) {
//     return number & 1 === 1;
// }
//
// console.log(separateNumbers(numList));
//
//
//
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function separateNumbers(numList) {
    return numList.reduce((acc, num) => {
        isOdd(num) ? acc.oddList.push(num) : acc.evenList.push(num);
        return acc;
    }, { evenList: [], oddList: [] });
}

function isOdd(number) {
    return number & 1;
}


console.log(separateNumbers(numList));

// const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function separateNumbers(numList) {
//     let evenNums = [];
//     let oddNums = [];
//
//     for (const num of numList) {
//         isOdd(num)? oddNums.push(num) : evenNums.push(num);
//     }
//
//     return{evenNums, oddNums};
// }


//
// function isOdd(number) {
//     return number & 1;
// }
//
// console.log(separateNumbers(numList));


// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
// que contém nome, nota 1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno

alunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'Carlos', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 7, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 9 },
    { nome: 'Lúcia', nota1: 8, nota2: 7 },
    { nome: 'Fernando', nota1: 7, nota2: 6 },
    { nome: 'Camila', nota1: 9, nota2: 8 },
    { nome: 'Rafael', nota1: 6, nota2: 5 },
    { nome: 'Juliana', nota1: 10, nota2: 9 }
]

// for(let aluno of alunos) {
//     let media = (aluno.nota1 + aluno.nota2) / 2;
//     console.log(`O aluno(a) ${aluno.nome} tem média: ${media}`);
// }

// function imprimirNotasMedias(alunos) {
//     for (const aluno of alunos) {
//         let somaNotas = 0;
//         let numNotas = 0;
//         for (const propriedade in aluno) {
//             if (propriedade.startsWith("nota")) {
//                 somaNotas += aluno[propriedade];
//                 numNotas++;
//             }
//         }
//         let media = somaNotas / numNotas;
//         console.log(`Nome: ${aluno.nome} Média: ${media}`)
//     }
// }
//
// imprimirNotasMedias(alunos);


// function calcularNotasMedias(alunos) {
//     return alunos.map(aluno => {
//         const { nome, ...rest } = aluno;
//         const notas = Object.values(rest).filter(val => typeof val === 'number');
//         const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
//         return { nome, media };
//     });
// }
//
// const medias = calcularNotasMedias(alunos);
// medias.forEach(({ nome, media }) => {
//     console.log(`Nome: ${nome} Média: ${media}`);
// });

// const listaDeAlunos = [
//     { nome: 'João', notas: [8, 7] },
//     { nome: 'Maria', notas: [9, 8] },
//     { nome: 'Carlos', notas: [6, 5] },
//     { nome: 'Ana', notas: [7, 6] },
//     { nome: 'Pedro', notas: [10, 9] },
//     { nome: 'Lúcia', notas: [8, 7] },
//     { nome: 'Fernando', notas: [7, 6] },
//     { nome: 'Camila', notas: [9, 8] },
//     { nome: 'Rafael', notas: [6, 5] },
//     { nome: 'Juliana', notas: [10, 9] }
// ];
//
// function getListaDeNomesEMedias(alunos) {
//     return alunos.map(aluno => {
//         const nome = aluno.nome;
//         const media = aluno.notas.reduce((acumulador, atual) => acumulador + atual) / aluno.notas.length;
//         return {nome, media};
//     })
// }

// getListaDeNomesEMedias(listaDeAlunos).forEach(({nome, media}) => {
//     console.log(`Nome: ${nome} Media: ${media}`)
// });


// Exercício:

// function getSeisDezenasAleatorias() {
//     const dezenas = []
//     while (dezenas.length < 6) {
//         const dezena = [];
//         while (dezena.length < 10) {
//             dezena.push(Math.round(Math.random() * 100))
//         }
//         dezenas.push(dezena);
//     }
//     return dezenas;
// }
//
// console.log(getSeisDezenasAleatorias())



function generateMegaSenaNumbers() {
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = Math.floor((Math.random() * 60) +1);
        numbers.add(randomNumber);
    }

    return [...numbers];
}

const megaSenaNumbers = generateMegaSenaNumbers();
console.log(megaSenaNumbers);


const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro);  // 1
console.log(segundo);   // 2
console.log(resto);     // [3, 4, 5]