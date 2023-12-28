// Given an array of numbers, use the map function to create a new array where each number is mapped to true if it's even and false if it's odd.

const numbers = [1, 2, 3, 4, 5, 6];
// Your code here
// Result should be: [false, true, false, true, false, true]

let arr= numbers.map(num=>
    num%2==0?"true":"false"
)
console.log(arr);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isEvenArray = numbers.map(number => number % 2 === 0);

// console.log(isEvenArray);