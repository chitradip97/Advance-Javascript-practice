// Given an array of objects representing products, use the map function to create a new array where each object has an additional property priceWithTax, calculated as price * 1.1 (10% tax).
const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
  ];

  let arr= products.map(product=>({name:product.name,price:product.price,priceWithTax:(product.price*(10/100))}))
  console.log (arr);