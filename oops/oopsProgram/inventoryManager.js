/************************************************************
 * Execution    :   1. cmd> node inventoryManager.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon inventoryManager.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   inventoryManager.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
let readline = require('readline-sync');
let fileSystem = require('fs');
let utility = require('../Utility/utility');
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
    utility.bill(cart);
}
userInterface();