// Given an array of strings, use the every function to check if all strings have more than 3 characters.

const words = ['apple', 'banana', 'kiwi', 'strawberry', 'orange'];
let verify=words.every(word=>word.length>3);
console.log("output :"+verify);