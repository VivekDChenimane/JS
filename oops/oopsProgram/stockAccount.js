/************************************************************
 * Execution    :   1. cmd> node stockAccount.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon stockAccount.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   stockAccount.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
var util = require('../Utility/stockAcountUtil');
var util1 = require('../Utility/utility');
var readline = require('readline-sync');
function userInterface() {
    var choice = readline.questionInt("Enter \n 1.Create account \n 2.Add company \n ");
    switch (choice) {
        case 1: { 
            var file = readline.question("Enter the file name to be saved.");
            file = util1.validateString(file);
            util.createStackAccount(file);
            break;
        }
        case 2 :{
            util.addCompany();
            break;
        }
    }
}
userInterface() 