function fibonacci2(n, memo = new Map) {
    if (memo.has(n)) return memo.get(n);
    if (n <= 1) return n;

    const fib = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo);
    memo.set(n , fib);
    console.log(fib);
    return fib;
}

fibonacci2(10)
