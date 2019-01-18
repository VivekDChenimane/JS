/************************************************************
 * Execution    :   1. cmd> node PrimeFactorization.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon PrimeFactorization.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the prime factorization of user asked number.
 * 
 * @description
 * 
 * @file        :   PrimeFactorization.js
 * @overview    :   To check the divisiblity from 2 to sqare root of the number Iteratively.
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
const util = require('../Utility/Utility');
var value = readline.questionInt("Enter the number:");
util.primeFactorization(value);