// Problem: Find the longest word in an array of strings.
const words = ['apple', 'banana', 'kiwi', 'strawberry', 'orange'];
let longest=words.reduce((iniVal,currVal)=>currVal.length>iniVal.length?iniVal=currVal:iniVal)
console.log('longest word :'+longest);