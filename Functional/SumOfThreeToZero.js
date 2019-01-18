/************************************************************
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 * Execution    :   1. cmd> node SumOfThreeToZero.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon SumOfThreeToZero.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To find the triplets whose sum is equal to Zero.
 * 
 * @description
 * 
 * @file        :   SumOfThreeToZero.js
 * @overview    :   For all permutation of the string find the distinct triplets whose sum equals Zero.
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
const util = require('../Utility/Utility');
var num = readline.question("Enter the number of elements you want to insert inside the array ");
var arr = util.twoDArray(1, num);
console.log(arr);
if (num < 3)
    console.log("Since the number of elements in an array is less than three,there is no triplets whose sum is 0.");
else
    util.triplet(arr);
