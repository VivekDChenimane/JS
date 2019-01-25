/************************************************************
 * Execution    :   1. cmd> node stockReport.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon stockReport.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   stockReport.js
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
