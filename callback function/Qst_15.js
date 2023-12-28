// Write a function that takes an array of numbers and returns the sum of the squares of each number. Use the forEach method.


const numbers = [1, 2, 3, 4, 5];
let sum=0
let exp=num=>sum+=num*num;
    // console.log(sum);

numbers.forEach(exp);
console.log(sum);