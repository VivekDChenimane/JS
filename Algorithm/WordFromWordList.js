/************************************************************
 * Execution    :   1. cmd> node WordFromWordList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon WordFromWordList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Check for entered word present in the file.
 * 
 * @description
 * 
 * @file        :   WordFromWordList.js
 * @overview    :   Scan the file, split the words to an array and check for the word.
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
var fileStream = require('fs');
var f = fileStream.readFileSync('File.txt', 'utf8');
var arr = f.split(' ');
return arr;