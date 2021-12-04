let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

let fibonacci = [ 0, 1];

for( let i = 1; i <= 10; i ++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i- 2];
}

console.log(fibonacci)