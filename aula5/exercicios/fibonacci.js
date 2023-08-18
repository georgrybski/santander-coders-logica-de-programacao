
function noMemoFibonacci(n) {
    if ( n <= 1 ) return n;

    return noMemoFibonacci(n -1) + noMemoFibonacci(n -2)
}


function memoizedFibonacci(n, memo = new Map) {
    if ( memo.has(n) ) return memo.get(n)
    if ( n <= 1 ) return n;

    const value = memoizedFibonacci(n -1, memo) + memoizedFibonacci(n -2, memo)
    memo.set(n, value);
    return value;
}

function fibonacciBenchmark(func, param) {
    const start = performance.now();
    const result = func(param);
    const end = performance.now();
    console.log(`The function ${func.name} took ${end - start} milliseconds to calculate the term No ${iterations} (${result}) \n`);
}

//
// const iterations = 45
// fibonacciBenchmark(memoizedFibonacci, iterations);
// fibonacciBenchmark(noMemoFibonacci, iterations);
//


// const array = []
// for (let i = 0; i < 30; i++) {
//     array.push(memoizedFibonacci(i))
// }
// console.log(array);
//
let fibonacciTerm = 10;  // Number of terms you want to generate
let currentNum = 0;
let nextNum = 1;

for (let i = 0; i <= fibonacciTerm; i++) {
    console.log(currentNum);
    [currentNum, nextNum] = [nextNum, currentNum + nextNum];
}
//
//
//

