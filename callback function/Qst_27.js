// You have an array of strings representing words. Write a function called filterPalindromes that takes an array of words as input and returns a new array containing only palindromes (words that read the same backward as forward).
const words = ['level', 'hello', 'radar', 'world', 'madam'];

let filterPalindromes =words.filter(word=>word==word.split('').reverse().join(''));
console.log(filterPalindromes);