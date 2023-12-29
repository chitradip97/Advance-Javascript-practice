// You have an array of objects representing fruits. Each fruit object has a color property. Write a function called filterRedFruits that takes an array of fruit objects as input and returns a new array containing only fruits with the color 'red'.

const fruits = [
    { name: 'Apple', color: 'red' },
    { name: 'Banana', color: 'yellow' },
    { name: 'Cherry', color: 'red' },
    { name: 'Orange', color: 'orange' },
  ];

  filterRedFruits=fruits.filter(fruit=>fruit.color=='red')
  console.log(filterRedFruits)  ;