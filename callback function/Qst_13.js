// Find Average:
// Write a function that takes an array of numbers and calculates the average value. Use the forEach method.

const numbers = [10, 20, 30, 40, 50 ];
let avg=0;
var count=0;
let average=(num)=>{
    avg=(avg+num);
    count=count+1;
    // console.log(avg)
     console.log(count)
}
new_avg=avg/count;//??????????
numbers.forEach(average);
console.log(avg/count)
