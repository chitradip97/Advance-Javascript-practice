// Create an array of objects with 'name' and 'age' properties. Use the some function to find if anyone is both older than 25 and has the name 'John'

const peoples = [
    { name: 'Alice', age: 25 },
    { name: 'John', age: 30  },
    { name: 'Charlie', age: 25  },
    { name: 'David', age: 35 },
  ];
  let arr=peoples.some(people=>people.name=='John'&& people.age>25)
  console.log("vefify :"+arr);
