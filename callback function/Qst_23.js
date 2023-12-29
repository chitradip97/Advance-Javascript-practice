// You have an array of strings representing names. Write a function called filterShortNames that takes an array of names as input and returns a new array containing only names with a length less than or equal to 5.

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

let filterShortNames =names.filter(name=>name.length<=5)
console.log(filterShortNames)