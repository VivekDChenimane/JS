/************************************************************
 * Execution    :   1. cmd> node dayOfTheWeek.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon dayOfTheWeek.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Get the day of the date.
 * 
 * @description
 * 
 * @file        :   dayOfTheWeek.js
 * @overview    :   Read the date and return the integer which indicate the day of the week.
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
function dayOfWeek() {
    var day = +process.argv[2];
    var month = +process.argv[3];
    var year = +process.argv[4];
    var num = Utility.dayOfWeek(day, month, year);
    var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= res.length) {
        console.log("The day falls on :" + res[num])
    }
    else {
        console.log("Invalid day ")

    }
}
dayOfWeek();