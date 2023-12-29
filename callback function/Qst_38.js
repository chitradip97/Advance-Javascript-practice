// Problem: Determine if all elements in an array are greater than a certain threshold.
const numbers = [20, 25, 18, 30, 22];
const threshold = 15;
let verify=numbers.reduce((iniVal,curVal)=>curVal>threshold||iniVal>threshold)
console.log("threshold verify :"+verify);