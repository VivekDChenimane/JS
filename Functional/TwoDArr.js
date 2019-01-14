/************************************************************
 * Execution    :   1. cmd> node TwoDArr.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon TwoDArr.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Read and display 2 Dimensional values.
 * 
 * @description
 * 
 * @file        :   TwoDArr.js
 * @overview    :   Use arrays to store and retrieve the values in order.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   08-01-2019
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
console.log("Enter the array length of m rows n columns");
var m = readline.questionInt("Enter the value of m");
var n = readline.questionInt("Enter the value of n");
var arr = util.twoDArray(m,n);
util.print(arr);