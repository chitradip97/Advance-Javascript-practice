// Create an array of objects with 'name' and 'age' properties. Use the find function to find the object of a person with age 25.
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 }
  ];
  let findPerson=people.find(person=>person.age==25)
  console.log("person :"+findPerson.name);