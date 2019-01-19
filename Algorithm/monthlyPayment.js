/************************************************************
 * Execution    :   1. cmd> node monthlyPayment.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon monthlyPayment.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To calculate the monthly payment.
 * 
 * @description
 * 
 * @file        :   monthlyPayment.js
 * @overview    :   Use formulae to calculate the payment.
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
function payment() {
    var principle = +process.argv[2];
    var year = +process.argv[3];
    var rate = +process.argv[4];
    util.monthlyPayment(principle, year, rate);
}
payment();