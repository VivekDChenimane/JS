/************************************************************
 * Execution    :   1. cmd> node FlipCoin.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon FlipCoin.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To flip coin and get the percentage of head and tails obtained.
 * 
 * @description
 * 
 * @file        :   FlipCoin.js
 * @overview    :   Sum the number of times the count of heads and tails,calculate the percentage.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   06-01-2019
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
var times = readline.question("Enter the number of times to flip a coin");
Utility.flipCoin(times);