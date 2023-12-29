// You have an array of objects representing employees. Each employee object has a salary property. Write a function called filterHighSalaryEmployees that takes an array of employee objects as input and returns a new array containing only employees with a salary greater than $50,000.
const employees = [
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 45000 },
    { name: 'Charlie', salary: 75000 },
    { name: 'David', salary: 55000 },
  ];

  let filterHighSalaryEmployees=employees.filter(employee=>employee.salary>=50000)
  console.log(filterHighSalaryEmployees);