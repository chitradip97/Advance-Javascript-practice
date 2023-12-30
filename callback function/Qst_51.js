// Given an array of arrays, use both some and every functions to check if at least one subarray contains all positive numbers.

const nestedArray = [
    [1, 2, -3],
    [26, 63, 88, 2],
    [25, -12],
    [10, 20, 30, -40]
  ];

//   let verify=nestedArray.some(array=>{
//    return array.every(arr=>arr>0)
//   })
//   console.log("output :"+verify);

//   another way

let verify=nestedArray.some(array=>array.every(arr=>arr>0))
   console.log("output :"+verify);