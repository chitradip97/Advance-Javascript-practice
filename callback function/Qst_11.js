// Question 20: Mapping to Object Properties
// Given an array of persons, use the map function to create a new array where each person is represented by an object with name and isAdult properties. The isAdult property should be true if the person's age is 18 or older, and false otherwise.

const persons = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
  ];
  // Your code here
  // Result should be: [{ name: "Alice", isAdult: true }, { name: "Bob", isAdult: false }, { name: "Charlie", isAdult: true }]

  let arr=persons.map(person=>(
    (person.age>=18)?{name:person.name,isAdult:true}:{name:person.name,isAdult:false}
  ))

  console.log(arr);


//   const personsWithAgeStatus = persons.map(person => ({
//     name: person.name,
//     isAdult: person.age >= 18,
//   }));
  
//   console.log(personsWithAgeStatus);