// Given an array of numbers, use the map function to create a new array of objects where each object has a value property set to the corresponding number.

const numbers = [1, 2, 3, 4, 5];
// Result should be: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]

// let arr=numbers.map((val)=>({
//      value : val 
// }))

let arr=numbers.map(Number=>({value:Number}))
console.log (arr);