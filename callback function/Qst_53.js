// Chaining both some and every functions, check if there is an array in an array of arrays where all elements are greater than 5.
const nestedArray = [
    [1, 2, 3],
    [6, 63, 83, 2],
    [25, 14],
    [10, 20, 30, -40]
  ];

  let verify=nestedArray.some(array=>array.every(arr=>arr>5))
   console.log("output :"+verify);