// Write a function that uses the find function to locate the first string in an array that has more than 5 characters.
const words = ['apple', 'banana', 'kiwi', 'grape'];
let findstring=words.find(word=>word.length>5);
console.log("string :"+findstring)