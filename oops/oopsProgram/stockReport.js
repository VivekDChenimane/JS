let readline = require('readline-sync');
let fileSystem = require('fs');
let utility = require('../Utility/utility');
function userInterface() {
    let flag = true;
    var store = [];
    console.log("\t Stock management");
    do {
        let choice = readline.questionInt("Choose\n 1.Stock Report\n 2.Stock of a company\n 3.Exit")
        switch (choice) {
            case 1: {
                utility.stockReport();
                break;
            }
            case 2: {
                break;
            }
            case 3: {
                flag = false;
                break;
            }
        }
    } while (flag)
}
userInterface();
