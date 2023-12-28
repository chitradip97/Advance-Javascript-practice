// Write a function that takes an array of arrays and returns a single array containing the concatenated elements of all subarrays. Use the forEach method.

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let single_arr=[];
let arr=numbers=>{
//  for(let num of numbers)
//  {
//     single_arr.push(num);
//  }
numbers.forEach(num=>single_arr.push(num))
}
arrays.forEach(arr);
console.log(single_arr);