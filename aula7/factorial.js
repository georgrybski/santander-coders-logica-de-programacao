
function iterativeFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return n < 0 ? undefined : result;
}
for (let i = 0; i < 10 ; i++) {
    console.log(iterativeFactorial(i));
}

function factorial(n) {
    return n < 0 ? undefined : Array.from({length: n}, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
}

function recursiveFactorial(n, memo = new Map) {
    if (memo.has(n)) return memo.get(n);
    if (n < 0 ) return undefined;
    if (n <= 1) return 1;

    memo.set(n, (n * recursiveFactorial(n - 1)));
    return memo.get(n);
}

for (let i = 0; i < 10 ; i++) {
    console.log(recursiveFactorial(i));
    console.log(factorial(i))
}

console.log(recursiveFactorial(10));
console.log(factorial(10))
