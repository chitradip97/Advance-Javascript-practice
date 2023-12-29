// You have an array of objects representing books. Each book object has a publishedYear property. Write a function called filterRecentBooks that takes an array of book objects as input and returns a new array containing only books published in the last 10 years (assuming the current year is 2023).

const books = [
    { title: 'Book A', publishedYear: 2010 },
    { title: 'Book B', publishedYear: 2015 },
    { title: 'Book C', publishedYear: 2022 },
    { title: 'Book D', publishedYear: 2005 },
  ];

  let filterRecentBooks=books.filter(book=>2023-book.publishedYear<=10)
  console.log(filterRecentBooks);