// Given an array of strings, use the map function to create a new array that contains the lengths of each string.

const words = ["apple", "banana", "orange", "grape"];

let length_arr=words.map((val)=>{
    return val.length;
})
console.log(length_arr);