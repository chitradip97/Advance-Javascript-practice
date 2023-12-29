// Problem: Concatenate an array of strings with a specific separator.
const words = ['Hello', 'world', 'how', 'are', 'you'];

let Concatenate=words.reduce((initialvalue,currentvalue)=>initialvalue+' '+currentvalue)
console.log(Concatenate);