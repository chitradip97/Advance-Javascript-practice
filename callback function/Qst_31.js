// You have an array of numbers. Write a function called filterMultiplesOfThree that takes an array of numbers as input and returns a new array containing only numbers that are multiples of three.

const numbers = [1, 3, 5, 9, 12, 15, 18, 21];
let filterMultiplesOfThree=numbers.filter(Num=>Num%3==0)
console.log(filterMultiplesOfThree);