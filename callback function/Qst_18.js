// Write a function that takes an array of strings and removes duplicate entries, returning a new array with unique strings. Use the forEach method.

let arr=['apple','banana','apple','magno','grapes']
let new_arr=[]
let unique=word=>{
  new_arr.indexOf(word)==-1?new_arr.push(word):'';
  //console.log(new_arr.indexOf(word));
}
arr.forEach(unique);
console.log(new_arr);