// Remove Duplicates:
// Write a function to remove duplicates from an array.
// Sample Input: [1, 2, 2, 3, 4, 4, 5]

let Input_arr=[1, 2, 2, 3, 4, 4, 5,6,7,6,8,5];
// Input_arr.forEach(val=>{
    Input_arr.findIndex((val,index)=>{
        dub_index=Input_arr.indexOf(val,index+1);
        if(dub_index>0)
        {
            Input_arr.splice(dub_index,1);
        }
    })

// })
console.log(Input_arr);