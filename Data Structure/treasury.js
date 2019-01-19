class Treasury {
    constructor() {
        this.totalAmount = 200000;
    }
    balance() {
        return this.totalAmount;
    }
    receiveAmount(amount) {
        this.totalAmount += amount;
    }
    dispatchAmount(amount) {
        this.totalAmount -= amount;
    }
}
module.exports = {
    Treasury
}