// Write a function that takes an array of strings and converts each string to uppercase. Use the forEach method.

const words = ['apple', 'banana', 'cherry'];
let arr=[];

let caps=word=>{
    let new_word=word.toUpperCase();
    arr.push(new_word);
}

words.forEach(caps);
console.log(arr);