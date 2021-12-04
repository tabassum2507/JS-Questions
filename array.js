const num = [20, 25, 48, 35, 85, 65];
let max = [0];
for (let i = 0; i < num.length; i++) {
const element = num[i];
if( element > max){
max = element;
}
}
console.log(max)