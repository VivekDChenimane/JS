/************************************************************
 * Execution    :   1. cmd> node tempConvertor.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon tempConvertor.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Convert the temperature celsius <-> fahreinheit.
 * 
 * @description
 * 
 * @file        :   tempConvertor.js
 * @overview    :   Ask for the input type and display the result respectively.
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
var i = readline.questionInt("Choose your input as 1 if celsius 2 if fahreinheit");
var temperature;
if (i == 1)
	temperature = readline.questionFloat("Enter temperature in celsius");
else if (i == 2)
	temperature = readline.questionFloat("Enter temperature in fahreinheit");
else
	console.log("Enter the correct option");
util.temperaturConversion(temperature, i);