// Problem: Flatten an array of arrays into a single array.
const nestedArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
let arr=nestedArrays.reduce(((iniVal,CurrVal)=> iniVal.concat(CurrVal)),[])
console.log(arr);

// using map method
// arr_new=[]
// let arr=nestedArrays.map(values=>values.map(number=>arr_new.push(number)));
// console.log(arr_new);