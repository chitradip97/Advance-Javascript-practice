// 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
    constructor(title,author,pub_year){
        this.title=title;
        this.author=author;
        this.pub_year=pub_year;
    }
    display(){
        console.log(`Your book is ${this.title} author is ${this.author} and publication year is ${this.pub_year}`);
    }
}

class Ebook extends Book{
    constructor(title,author,pub_year,price){
        super(title,author,pub_year);
        this.price=price;
    }
    display(){
        console.log(`Your book is ${this.title} author is ${this.author} and publication year is ${this.pub_year} price is ${this.price}`);
    }
}

obj=new Ebook('kranty','sovon pal','rewrite publication',350);