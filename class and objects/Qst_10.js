// 10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price

class product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    total_price(quantity){
        this.quantity=quantity;
     return this.quantity*this.price;
    }
}
class PersonalCareProduct extends product{
        constructor(id,name,price,warranty_period){
            super(id,name,price)
            this.warranty_period=warranty_period;
          

        }
        total_price(quantity){
            let total_price=super.total_price(quantity);
            console.log(total_price+this.warranty_period);
        }

}
obj=new PersonalCareProduct(101,'chitro',550,2);