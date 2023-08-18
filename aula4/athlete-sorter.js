const atletas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
];

// Sort by weight in ascending order
function sortByWeightAscending(a, b) {
    return a.peso - b.peso;
}

atletas.sort(sortByWeightAscending);
console.log("Sorted by weight ascending:");
console.log(atletas);

// Sort by height in descending order
function sortByHeightDescending(a, b) {
    return b.altura - a.altura;
}

atletas.sort(sortByHeightDescending);
console.log("Sorted by height descending:");
console.log(atletas);

// Sort by name alphabetically
function sortByNameAlphabetically(a, b) {
    return a.nome > b.nome ? 1 : -1;
}

atletas.sorted();
console.log("Sorted by name alphabetically:");
console.log(atletas);