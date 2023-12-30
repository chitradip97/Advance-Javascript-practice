// Given an array that may contain undefined values, use the find function to locate the first undefined element.
const mixedArray = [1, 2, undefined, 4, 5];
let findval=mixedArray.find((value,index)=>value===undefined);
console.log('index:'+findval);
