// You have an array of numbers. Your task is to create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filterEvenNumbers=number=>{
//     return (number%2==0)
// }
// let new_filterEvenNumbers=numbers.filter(filterEvenNumbers);
// console.log(new_filterEvenNumbers);

// onother way
 let filterEvenNumbers=numbers.filter(number=>(number%2==0));
 console.log(filterEvenNumbers);

// With map its not possible  because map must return a value to the output array for each of the element after calculation from the input array . If still we want to do that we have to do this by another way of approach using map
// let arr=[];
// let filterEvenNumbers=numbers.map(number=>{(number%2==0)? arr.push(number):continue});
// console.log(filterEvenNumbers);

// another way using map
// let arr=[];
// let filterEvenNumbers=numbers.map(number=>{
//     if(number%2==0){
//         arr.push(number)
//     }
//     else{
//         ''
//     }});
// console.log(arr);

// With forEach its not posibble because forEach will execute the operation for 
// let arr=[];
// let filterEvenNumbers=numbers.forEach(number=>{
//     if(number%2==0){
//         arr.push(number)
//     }
//     else{
//         ''
//     }});
// console.log(arr);
