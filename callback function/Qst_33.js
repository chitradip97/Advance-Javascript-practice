// Calculate the sum of all even numbers in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let sum_value=0
let sum=numbers.reduce((total,number)=>(number%2==0)? total+number:total)
console.log(sum);
//    if(number%2==0)
//    {
//    return total+number;
//    }
//    else{
//     return total ;
//    }
   
   
   
// )
