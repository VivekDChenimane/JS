/************************************************************
 * Execution    :   1. cmd> node squareRoot.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon squareRoot.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the primes numbers in the range.
 * 
 * @description
 * 
 * @file        :   squareRoot.js
 * @overview    :   Traverse through the range to check each element is prime or not.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   10-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../Utility/algoUtil');
function sqrt() {
    var num = readline.question("Enter the non negative value ");
    Utility.sqrt(num);
}
sqrt();