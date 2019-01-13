/************************************************************
 * Execution    :   1. cmd> node InsertionSort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon InsertionSort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Sort the Array of numbers.
 * 
 * @description
 * 
 * @file        :   InsertionSort.js
 * @overview    :   Sort the array of numbers by inserting each element to its position by comparing it
 *                  with the previous values.
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
const util = require('../Utility/AlgoUtil');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter "+num+" elements");
var arr = [];
arr = util.createNumberArray(num);   
arr = util.insertionSort(arr);
console.log(arr);