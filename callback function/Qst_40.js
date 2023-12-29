// Problem: Calculate the factorial of a given number using reduce.
const number = 5;
// let factorial=number.reduce((iniVal,currVal)=>{
//     if(currVal>=1)
//     {
//         currVal=iniVal-1;
//        return iniVal= currVal*iniVal;
//     }
//     else{
//         return iniVal;
//     }

// })
// console.log(iniVal);

const factorial = Array.from({ length: number }, (_, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("Factorial:", factorial);