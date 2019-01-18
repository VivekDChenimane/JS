/************************************************************
 * Execution    :   1. cmd> node Anagram.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Anagram.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Checks if two Strings are Anagram or not.
 * 
 * @description
 * 
 * @file        :   Anagram.js
 * @overview    :   Checks two String if they are simply a rearrangement of each other.
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
const util = require('../Utility/AlgoUtil');
/**
 * string1 holds the first passed String.
 */
var string1 = readline.question("Enter the first String");
/**
 * string2 holds the second passed String.
 */
var string2 = readline.question("Enter the second String");
/**
 * The two Strings are passed to anagram function present in AlgoUtil class
 * check catches the boolean return value.
 */
var check = util.anagram(string1, string2);
/**Print the statement based on the boolean value  */
if (check)
    console.log("The Strings are Anagram");
if (check == false)
    console.log("The String are not Anagram");