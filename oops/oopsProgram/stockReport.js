let readline = require('readline-sync');
let fileSystem = require('fs');
let utility = require('../Utility/utility');
function userInterface() {
    let flag = true;
    var store = [];
    console.log("\t Stock management");
    do {
        let choice = readline.questionInt("Choose\n 1.Stock Report\n 2.Exit")
        switch (choice) {
            case 1: {
                utility.stockReport();
                break;
            }
            case 2: {
                flag = false;
                break;
            }
            default : {
                console.log("Enter correct value please.")
            }
        }
    } while (flag)
}
userInterface();
