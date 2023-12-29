// Problem: Group an array of objects by a specific property.
const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'David', age: 35, city: 'San Francisco' },
  ];
  
  const groupedByCity = people.reduce((accumulator, person) => {
    const city = person.city;
  console.log(accumulator)
  console.log(person)
    // Check if the city is already a key in the accumulator
    if (!accumulator[city]) {
      // If not, create an array for that city
      accumulator[city] = [];
    }
  
    // Add the person to the array for the respective city
    accumulator[city].push(person);
//     console.log(accumulator)
//   console.log(person)
  
    return accumulator;
  }, {});
  
  console.log("People grouped by city:", groupedByCity);