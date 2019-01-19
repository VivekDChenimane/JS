/************************************************************
 * Execution    :   1. cmd> node gambler.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon gambler.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Create the Gambling game.
 * 
 * @description
 * 
 * @file        :   gambler.js
 * @overview    :   To play Gambling game till player reaches his goal or losses all his money.
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
const util = require('../Utility/utility');
var stake = readline.questionInt("enter player's stake");
var goal = readline.questionInt("enter player's goal");
var trials = readline.questionInt("enter the number of player's trials");
util.Gambling(stake, goal, trials);