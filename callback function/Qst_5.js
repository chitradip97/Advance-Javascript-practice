// Given an array of names, use the map function to create a new array where the first letter of each name is capitalized.

const names = ["john", "jane", "doe","ronit"];

// let arr= names.map((value)=>{
//     return value.toUpperCase();
// })

let arr=names.map(value=>value.toUpperCase());

console.log(arr);