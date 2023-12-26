// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    constructor(acc_num,bal)
    {
        this.acc_num=acc_num;
        this.bal=bal;
    }
    deposit(money){
        console.log(this.bal+=money) ;
    }
    withdraw(money){
        console.log(this.bal-=money) ;
    }

}

obj=new BankAccount(201,3000);
