//  Write a JavaScript program to get the distance between two given points

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
console.log(distance(1, 1, 2, 3)); 
console.log(distance(-1, -1, 2, 3));