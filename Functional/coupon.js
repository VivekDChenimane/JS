/************************************************************
 * Execution    :   1. cmd> node coupon.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon coupon.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To generate the unique coupon numbers.
 * 
 * @description
 * 
 * @file        :   coupon.js
 * @overview    :   Use random numbers to generate coupon numbers.
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
const util = require('../Utility/utility');
var num = readline.questionInt("Enter the number of distinct coupons to be generated");
var couponArr = util.randomArray(num);
console.log(couponArr);