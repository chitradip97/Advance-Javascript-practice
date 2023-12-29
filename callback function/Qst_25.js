// You have an array of numbers. Write a function called filterNegativeNumbers that takes an array of numbers as input and returns a new array containing only the negative numbers.

const numbers = [1, -2, 3, -4, 5, -6];

let filterNegativeNumbers=numbers.filter(num=>num<0)
console.log(filterNegativeNumbers);