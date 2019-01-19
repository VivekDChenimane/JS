/************************************************************
 * Execution    :   1. cmd> node powerOfTwo.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon powerOfTwo.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get the powers of 2 from 1 to required range.
 * 
 * @description
 * 
 * @file        :   powerOfTwo.js
 * @overview    :   Iterate from 1 to range mean while print the power of it.
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
const util = require('../Utility/utility');
var flag = 0;
while (flag == 0) {
    var range = readline.questionInt("Enter the value to get the power of 2 within that Range");
    if (range < 32) {
        util.powerOfTwo(range);
        flag = 1;
    }
    else
        console.log("Enter within the range");
}