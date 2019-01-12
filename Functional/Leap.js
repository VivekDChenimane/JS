/************************************************************
 * Execution    :   1. cmd> node Leap.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Leap.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get to know whether the given year is Leap year or not.
 * 
 * @description
 * 
 * @file        :   Leap.js
 * @overview    :   Check for leap year Using constraints.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   07-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../Utility/Utility');
var year = readline.questionInt('Enter the year');
util.leap(year);
