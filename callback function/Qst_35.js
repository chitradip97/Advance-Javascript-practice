// Problem: Find the average of all numbers in an array.
const numbers = [10, 5, 8, 15, 7];

let avg=numbers.reduce((total,num,index)=>{
    total+=num
    // console.log(numbers.length)
   return (numbers.length==index+1)?total/(index+1):total
})
console.log(avg);