/************************************************************
 * Execution    :   1. cmd> node bubbleSort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon bubbleSort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Sort the Interger values passed by user in the console.
 * 
 * @description
 * 
 * @file        :   bubbleSort.js
 * @overview    :   Read all Interger values passed by user and Sort the numbers and Print.
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
const util = require('../Utility/algoUtil');
/**
 * Read the number of values the user want to enter and check if it is Integer type
 * num holds the value entered by user.
 */
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements");
/**
 * arr variable to hold the numbers in Array passed by user
 */
var arr = [];
/**
 * Pass number of numbers the user want to enter to function createNumberArray
 * arr holds the Array which contains the user inputs which is returned by the createNumber Array
 */
arr = util.createNumberArray(num);
/**
 * Pass Array of elements to bubbleSort to get the sorted Array
 * Sorted Array is stored in arr variable
 */
arr = util.bubbleSort(arr);
/**
 * Print the Sorted Array
 */
console.log(arr);