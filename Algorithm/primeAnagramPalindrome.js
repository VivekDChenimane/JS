/************************************************************
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 * Execution    :   1. cmd> node primeAnagramPalindrome.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon primeAnagramPalindrome.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Checks the numbers which are prime,anagram and palindrome.
 * 
 * @description
 * 
 * @file        :   primeAnagramPalindrome.js
 * @overview    :   Filter the numbers and display the array of numbers which satisfy's each function.
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
const util = require('../Utility/algoUtil');
var range = readline.questionInt("Enter the range");
var primes = util.prime(range);
var anagrams = util.anagramArr(primes);
var values = util.palindrom(anagrams);
console.log(values);