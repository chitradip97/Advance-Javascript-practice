// Use the find function to find the element in an array that is at index 3. Assume the array has more than three elements.
const elements = ['red', 'blue', 'green', 'yellow', 'orange'];
let value=elements.find((val,index)=>index==3);
console.log('value :'+value);

// with findIndex
let valueIndex=elements.findIndex((val,index)=>val=='yellow');
console.log('value :'+valueIndex);