

// forEach

// Squared Array:
// Write a function that takes an array of numbers and returns a new array where each element is the square of the original element. Use the forEach method.

const numbers = [1, 2, 3, 4, 5];
let arr=[];
// let arr=numbers.map(num=>num*num);
// console.log(arr);
function Square(num){
    let value= num*num
    arr.push(value);
}
 numbers.forEach(Square);

// numbers.forEach(num=>{ arr=(num*num) });
 console.log(arr);