 class User{

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

     viewData(){
        console.log(`Welcome Mr. ${this.name}`);
// document.write(`Your mail id. is ${this.email}`);
console.log(`Welcome to your page`);
    }
}

class admin extends User{
    constructor(name,email){
    super(name,email)
    }
 editData(){
    console.log(`Welcome to the new page`);
 }
}

newobj= new User('chitro','chitro@gmail.com');
newobj1= new User('dip','dip@gmail.com');
newobj3= new admin('admin','admin@gmail.com');
// newobj.viewData; 