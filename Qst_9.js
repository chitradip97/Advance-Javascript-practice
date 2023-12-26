// 9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank{
    constructor(name){
        this.name=name;
        this.branches=[];
        console.log(this.name);
        
    }
    add_branch(branch_nm){
        
        this.branches.push(branch_nm);
        console.log('branches added');
        
    }
    remove_branch(){
        this.branches.pop();
        console.log('branches deleted');
    }
    display(){
        console.log(this.branches);
    }

}
obj= new Bank('HDFC');