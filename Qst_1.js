// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;

    }

    details(){
        console.log(`your name is: ${this.name}`);
        console.log(`your age is: ${this.age}`);
        console.log(`your country is: ${this.country}`);
    }
}

obj1= new person('aditi','25','india');
obj2= new person('jack','22','US');