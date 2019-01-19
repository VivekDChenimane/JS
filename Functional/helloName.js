/************************************************************
 * Execution    :   1. cmd> node helloName.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon helloName.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Welcome the User.
 * 
 * @description
 * 
 * @file        :   helloName.js
 * @overview    :   Ask for valid user name and print a Hello message with User name.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   06-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
function replace() {
    var flag = true
    while (flag) {
        var input = readline.question("Enter the name?");
        if (input.length > 2) {
            console.log("Hello " + input + ", How are you?")
            flag = false
        }
        else
            console.log("User name should be greater than two letters.")
    }
}
replace();