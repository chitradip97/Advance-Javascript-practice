// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    annual_sal(){
        console.log(`Your salara is ${this.salary}`)
    }
}

class Manager extends Employee{
    constructor(name){
        super(name);
        }
    annual_sal(salary)
    {   
        let bonus=5000;
        let annual_salary = salary+=bonus;
        console.log(`${this.name} Your salary is ${annual_salary}`)
    }
}

obj=new Manager('chitro');