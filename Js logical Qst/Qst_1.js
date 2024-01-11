// Check for Anagrams:
// Write a function to check if two strings are anagrams.
// Sample Input: "listen", "silent"

let str1="listen";
let str2="silent";
let arr=str1.split("");
let arr2=str2.split("");
console.log(arr);
if(str1.length==str2.length)
{
let res=arr.every(val=>{
  return  arr2.some(value=>value==val)
})
if (res==true)
{
    console.log("yes it is Anagram");
}
else{
    console.log("No it is not Anagram");
}
}
else{
    console.log("No it is not Anagram");
}
