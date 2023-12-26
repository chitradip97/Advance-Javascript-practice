// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class shape{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    area(){}
}
class Circle extends shape{
    constructor(radius)
    {
        super();
        this.radius=radius; 
    }
    area(){
        let area=3.14*this.radius*this.radius;
        console.log(`area of the circle : ${area} `);
    }
}
class Triangle extends shape{
    constructor(height,width)
    {
        super(height,width); 
    }
    area(){
        console.log('area of the Triangle :'+ (this.height*this.width)/2);
    }

}

obj= new Circle(5);
obj1=new Triangle;
