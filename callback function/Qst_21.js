// Write a function that takes an array of strings and replaces a specified search string with a replacement string in each element. Use the forEach method.

const words = ['apple', 'banana', 'cherry'];
const replace_word=['a','x'];
let new_word='';
let new_arr=[];
let replace=word=>{
    // word.forEach(element => 
    //     element==replace_word[0]?new_word=new_word+replace_word[1]:new_word=element
    // );
    for(let element of word)
    {
        element==replace_word[0]?new_word=new_word+replace_word[1]:new_word=new_word+element
    }
    console.log(replace_word[1]);
    new_arr.push(new_word);
    new_word='';
}
words.forEach(replace);
console.log(new_arr);


// otherway

function searchAndReplace(strings, searchStr, replaceStr) {
    const modifiedStrings = [];
  
    strings.forEach((str) => {
      const modifiedStr = str.replace(searchStr, replaceStr);
      modifiedStrings.push(modifiedStr);
    });
  
    return modifiedStrings;
  }
  
  // Example usage:
  const words1 = ['apple', 'banana', 'cherry'];
  const modifiedWords = searchAndReplace(words1, 'a', 'X');
  console.log(modifiedWords);
