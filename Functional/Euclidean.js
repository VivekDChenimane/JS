/************************************************************
 * Execution    :   1. cmd> node Euclidean.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Euclidean.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the distance of a point from the origin.
 * 
 * @description
 * 
 * @file        :   Euclidean.js
 * @overview    :   Uses Euclidean formulae to calculate the distance from the origin.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   09-01-2019
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
console.log("Get to know the distance from the origin by Entering X and Y values:");
var X = readline.questionInt("Enter the value of X");
var Y = readline.questionInt("Enter the value of Y");
var distance = util.euclidean(X, Y);
console.log("The distance between the point to the origin is " + distance);