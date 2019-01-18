/************************************************************
 * Execution    :   1. cmd> node PalindromeChecker.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon PalindromeChecker.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To check if the given word is palindrome or not.
 * 
 * @description
 * 
 * @file        :   PalindromeChecker.js
 * @overview    :   Use rear and front to check from both ends if the word is palindrome or not.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities of Deque.
 */
var access = require('../Utility/Deque');
function check() {
    var deque = new access.Deque;
    var answer = readline.question("Enter the string  ");
    var result = deque.PalindromeChecker(answer);
    if (result == false) {
        console.log("String is not an a Palindrome ");
    }
    else {
        console.log("String is palindrome  ");
    }
}
check();