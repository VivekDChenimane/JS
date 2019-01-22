let readline = require('readline-sync');
let fileSystem = require('fs');
let utility = require('../Utility/utility')
function userInterface() {
    let flag = true;
    var store = [];
    console.log("\t Stock management");
    do {
        let choice = readline.questionInt("Choose\n 1.Purchase\n 2.Stock\n 3.Exit ")
        switch (choice) {
            case 1: {
                utility.purchase();
                break;
            }
            case 2: {
                utility.displayStore();
                break;
            }
            case 3: {
                flag = false;
                break;
            }
            default: console.log("Please enter correct choice")
        }
    } while (flag)
    utility.stringifyInventory();
    let cart = utility.parseInventory();
    console.log(cart);
    utility.bill(cart);
}
userInterface();