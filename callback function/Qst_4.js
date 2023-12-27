// Given an array of objects representing persons, use the map function to create a new array that contains only the names of the persons.

const persons = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
  ];

//   let new_array=persons.map((values)=>{
//     for (const key in values) {
//         if(key== "name")
//         {
//             return values[key];
//         }
//     }
//   })

  const names = persons.map(person => person.name);
  console.log(names);
