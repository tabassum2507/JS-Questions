function largeSwap(num) {
    return num/10 > num % 10;

}

const num2 = largeSwap(67);
console.log(num2);

// const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;
// const res = largestSwap(89);
// console.log(res);