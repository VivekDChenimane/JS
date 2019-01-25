/************************************************************
 * Execution    :   1. cmd> node regularExpression.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon regularExpression.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   regularExpression.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
const utility = require('../Utility/utility');
const readline = require('readline-sync');
var Regex = () => {
    try {
        var name = readline.question("Enter your name ");
        name = utility.validateString(name);
        var fullname = readline.question("Enter your full name ");
        fullname = utility.validateString(fullname);
        var mobileNo = readline.questionInt("Enter your Mobile number ");
        if (mobileNo.length < 10 || 10 < mobileNo.length) throw "Please enter valid phone number. ";
        console.log();
        console.log("------------------------------------------------------");
        console.log();
        utility.regex(name, fullname, mobileNo)
    } catch (error) {
        console.log(error);
    }
}
Regex();