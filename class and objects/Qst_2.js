// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    rectangle_area(){
        let area=this.width*this.height;
        console.log(`your area is ${area}`);
    }
    rectangle_perimeter(){
        let perimeter=2*(this.width+this.height);
        console.log(`your area is ${perimeter}`);
    }

}
newobj=new rectangle(15,5);