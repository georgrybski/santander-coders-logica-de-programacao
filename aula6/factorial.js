function factorial(n, memo = new Map) {
    if (memo.has(n))
        return memo.get(n);

    if (n <= 1)
        return 1;

    memo.set(n, n * factorial( n -1));
    console.log(memo.get(n));
    return memo.get(n);
}

console.log(factorial(100))
