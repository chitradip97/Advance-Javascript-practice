// Write a function that takes an array of numbers and returns a new array where each element is the factorial of the original element. Use the forEach method.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let arr=[];
let fact=num=>{
    // let fact_val=num.map(number=>{
    //     let value=
    // })
    let value=1;
    for(i=1;i<=num;i++)
    {
         value=value*i;
        
    }
    arr.push(value);

}

numbers.forEach(fact);
console.log(arr);


// using map
// let fact1=[]
let fact1=numbers.map(num=>{
    let value=1;
    for(i=1;i<=num;i++)
    {
         value=value*i;
        
    }
    return value;
    // arr.push(value);
})
console.log(fact1)