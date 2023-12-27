// Given an array of numbers, use the map function to double each number in the array.
const numbers = [1, 2, 3, 4, 5];
 let double=(num)=>{
    return num*num;
 }
 let double_num=numbers.map(double);
 console.log(double_num);
