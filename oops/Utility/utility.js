let fileSystem = require('fs');
let readline = require('readline-sync');
var store = [];
class Inventory {
    constructor(item, quantity, price) {
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }
}
module.exports = {
    writeToFile(path, data) {
        fileSystem.writeFile(path, data, (err) => {
            if (err) throw err;
        });
        console.log("done");
        return;
    },
    readFromFile(path) {
        let data = fileSystem.readFile(path, err => {
            if (err) throw err;
        });
        console.log(data);
        return data;
    }
    ,
    purchase() {
        var item = readline.question("Enter the product to be added.");
        item = this.validateString(item);
        var quantity = readline.questionInt("Enter the quantity of " + item + ":");
        var price = readline.questionFloat("Enter the price per kg:")
        console.log(price);
        store.push(new Inventory(item, quantity, price));
        return;
    }
    ,
    displayStore() {
        console.log("Item\t Quantity\tPrice(/kg)\tTotal");
        for (const key in store) {
            if (store.hasOwnProperty(key)) {
                const element = store[key];
                console.log(element.item + "\t " + element.quantity + " \t\t" + element.price + "\t\t" + (element.quantity * element.price));
            }
        }
    },
    bill(cart) {
        let sum = 0;
        console.log("Item\t Quantity\tPrice(/kg)\tTotal");
        for (const key in cart) {
            if (cart.hasOwnProperty(key)) {
                const element = cart[key];
                let total = element.quantity * element.price;
                sum += total;
                console.log(element.item + "\t " + element.quantity + " \t\t" + element.price + "\t\t" + total);
            }
        }
        console.log("Total amount \t\t\t"+sum);
    }
    ,
    stringify(path, data) {
        data = JSON.stringify(data);
        console.log(data);
        this.writeToFile(path, data);
        return;
    },
    stringifyInventory() {
        this.stringify('../jsonFiles/inventory.json', store);
        return;
    }
    ,
    parse(path) {
        let data = this.readFromFile(path);
        console.log(data);
        data = JSON.parse(data);
        console.log(data);
        return data;
    }
    ,
    parseInventory() {
        let data = this.parse('../jsonFiles/inventory.json');
        return data;
    },
    regex(name, fullname, mobileNo) {
        var st1 = "Hello <<name>>,\nWe have your full name as <<full name>> in our system.\nYour contact number is 91-xxxxxxxxxx. \nPlease,let us know in case of any clarification. \nThank you BridgeLabz 01/01/2016. ";
        var st1 = st1.replace('<<name>>', name);
        st1 = st1.replace('<<full name>>', fullname);
        st1 = st1.replace('xxxxxxxxxx', mobileNo);
        var data = new Date().toLocaleDateString();
        st1 = st1.replace('01/01/2016', data);
        console.log(st1);
    }
    ,
    validateString(string) {
        let flag = true;
        do {
            if (!isNaN(string)) {
                string = readline.question("Enter the valid String:");
            }
            else
                flag = false;
        } while (flag)
        return string;
    }
}