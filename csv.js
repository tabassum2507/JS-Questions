//Write a JavaScript program to convert a 2D array to a comma-separated values (CSV) string.



const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
console.log(arrayToCSV([['a', 'b'], ['c', 'd']]));
console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';'));
