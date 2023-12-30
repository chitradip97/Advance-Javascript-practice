// Create an array of objects with 'name' and 'score' properties. Use the some function to find if anyone has a score greater than 90.
const peoples = [
    { name: 'Alice', score: 25 },
    { name: 'John', score: 95  },
    { name: 'Charlie', score: 25  },
    { name: 'David', score: 35 },
  ];
  let arr=peoples.some(people=>people.name=='John'&& people.score>90)
  console.log("vefify :"+arr);