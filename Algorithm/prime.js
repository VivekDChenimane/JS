/************************************************************
 * Execution    :   1. cmd> node prime.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon prime.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the primes numbers in the range.
 * 
 * @description
 * 
 * @file        :   prime.js
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
var range = readline.questionInt("Enter the range from 0 to get the prime numbers from that range");
var primes = util.prime(range);