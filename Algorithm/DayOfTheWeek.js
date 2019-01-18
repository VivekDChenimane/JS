/************************************************************
 * Execution    :   1. cmd> node BubbleSort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon BubbleSort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Sort the Interger values passed by user in the console.
 * 
 * @description
 * 
 * @file        :   BubbleSort.js
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
const util = require('../Utility/AlgoUtil');
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