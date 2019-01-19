/************************************************************
 * Execution    :   1. cmd> node harmonic.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon harmonic.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get the nth Harmonic number.
 * 
 * @description
 * 
 * @file        :   harmonic.js
 * @overview    :   Get the Harmonic number of all the values till nth number,
 *                  and get the sum of it.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   07-01-2019
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
const util = require('../Utility/utility');
var num = readline.questionInt("Enter the position number whose Harmonic value is needed:");
util.harmonic(num);