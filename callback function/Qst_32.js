// You have an array of objects representing products. Each product object has a price property. Write a function called filterAffordableProducts that takes an array of product objects as input and returns a new array containing only products with a price less than $100.

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 80 },
    { name: 'Headphones', price: 25 },
    { name: 'Tablet', price: 150 },
  ];
  let filterAffordableProducts=products.filter(product=>product.price<100);
  console.log(filterAffordableProducts);