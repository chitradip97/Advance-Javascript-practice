// Given a nested array, use the every function to check if all subarrays have a length greater than 2.

const nestedArray = [
    [1, 2, 3],
    ['a', 'b', 'c', 'd'],
    [true, false],
    [10, 20, 30, 40]
  ];
  let verify=nestedArray.every(array=>array.length>=2)
  console.log("Output :"+verify);