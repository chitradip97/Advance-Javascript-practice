// Problem: Count the occurrences of each element in an array and return the result as an object.
const elements = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana', 'apple'];
// let result=[];
// let count=0
// let occurrences=elements.reduce((fruit)=>{
//  if(fruit.includes(result)==true)
//  {
//     result.push(`{${fruit}:}`)
//  }
// })

const elementOccurrences = elements.reduce((accumulator, currentElement) => {
    // Increment the count for the current element in the accumulator
    accumulator[currentElement] = (accumulator[currentElement] || 0) + 1;
    
    return accumulator;
  }, {}); // Initialize accumulator as an empty object
  
  // Output the result
  console.log("Element occurrences:", elementOccurrences);1