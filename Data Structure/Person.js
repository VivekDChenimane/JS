class Person{
    constructor(){
        this.cash = 20000; 
    }
    deposit(amount){
        if(this.cash-amount<0){
            console.log("You don't have enough balance to deposit,your balance is "+this.cash);
            return;
        }
        this.cash=this.cash-amount;
        return;
    }
    withdraw(amount){
        this.cash=this.cash+amount;
        return;
    }
    balance(){
        return this.cash;
    }
}
module.exports={
    Person
}
/**
 * var p = new Person();
var bal=p.balance();
console.log(bal);
 */