/************************************************************
 * Execution    :   1. cmd> node GuessNumber.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon GuessNumber.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Guess the number in the user mind with minimun Questions.
 * 
 * @description
 * 
 * @file        :   GuessNumber.js
 * @overview    :   Guess the number in the given range->(pow(2,n)) within n questions.
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
console.log("Enter the range of the number,press enter after first number");
/**
 * Get the first element and last element of the range,
 * and assign to Variable first and last respectively. 
 */
var first = readline.questionInt("Enter the first number?");
var last = readline.questionInt("Enter the last number");
/**
 * Pass the range to the recursive function where further questions are asked,
 * and returns the correct answer.
 * value variable catches the value and prints the answer. 
 */
var value = util.binarySearch(first,last);
console.log("The number you choose was "+value);