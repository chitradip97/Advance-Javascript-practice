// Write a function that takes an array of numbers and returns a new array containing only the even numbers. Use the forEach method.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
new_arr=[];

let average=num=>{
    num%2==0?new_arr.push(num):''
}

numbers.forEach(average)
console.log(new_arr);