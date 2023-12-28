// Question 17: Mapping Nested Arrays
// Given an array of arrays containing numbers, use the map function to create a new array where each number is squared.

const nestedNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Result should be: [[1, 4, 9], [16, 25, 36], [49, 64, 81]]

 let arr=nestedNumbers.map(number=>
     number.map(num=>num*num)
 )

 console.log(arr);

// const squaredNumbers = nestedNumbers.map(innerArray =>
//     innerArray.map(number => number * number)
//   );
  
//   console.log(squaredNumbers);