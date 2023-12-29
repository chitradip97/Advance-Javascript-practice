// Problem: Calculate the product of all positive numbers in an array.

const numbers = [1, -2, 3, -4, 5, 6, -7, 8, -9, 10];

let product=numbers.reduce((total,num)=>num>0?total*num:total)
console.log(product)