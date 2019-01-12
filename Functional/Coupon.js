/************************************************************
 * Execution    :   1. cmd> node Coupon.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Coupon.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To generate the unique coupon numbers.
 * 
 * @description
 * 
 * @file        :   Coupon.js
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
const util = require('../Utility/Utility');
var num = readline.questionInt("Enter the number of distinct coupons to be generated");
var couponArr = util.randomArray(num);
console.log(couponArr);