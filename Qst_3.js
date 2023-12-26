// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle{
    constructor(model,year){
        this.model=model;
        this.year=year;

    }

    display(){
        console.log(`model is ${this.model} and year is ${this.year}`);
    }
}

class car extends Vehicle{
    constructor(model,year,door){
        super(model,year);
       
        this.door=door;
    }

    display(){
        console.log(`model is ${this.model} and year is ${this.year} having no of doors are ${this.door}`);
    }
}

obj= new car('Lexus','2009',4);