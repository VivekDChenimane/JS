class Person {
    constructor(name) {
        this.cash = 0;
        this.name = name
    }
    deposit(amount) {
        if (this.cash - amount < 0) {
            console.log("You don't have enough balance to deposit,your balance is " + this.cash);
            return;
        }
        this.cash = this.cash - amount;
        return;
    }
    withdraw(amount) {
        this.cash = this.cash + amount;
        return;
    }
    balance() {
        return this.cash;
    }
}
module.exports = {
    Person
}

var p = new Person();
var bal = p.balance();
console.log(p.name)
console.log(bal);
