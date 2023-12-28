// Question 18: Mapping to Strings
// Given an array of numbers, use the map function to create a new array where each number is converted to a string with an added "th" suffix.

const numbers = [1, 22, 35, 4];
// Your code here
// Result should be: ["1th", "22th", "35th", "4th"]

let arr=numbers.map(num=>
    num.toString()+'th'
)
console.log(arr);

// const numberedStrings = numbers.map(number => `${number}th`);

// console.log(numberedStrings);