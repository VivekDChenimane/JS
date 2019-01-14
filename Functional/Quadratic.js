/************************************************************
 * Execution    :   1. cmd> node Quadratic.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Quadratic.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Find the roots of the Quadratic equation.
 * 
 * @description
 * 
 * @file        :   Quadratic.js
 * @overview    :   Take A,B,C values of the equation Ax2+Bx+c=0 to get two root valkue of 'x'.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   08-01-2019
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
console.log("Quadratic equation is of the form aX2 + bX + c =0");
var a = readline.questionInt('Enter the value of A');
var b = readline.questionInt('Enter the value of B');
var c = readline.questionInt('Enter the value of C');
var root = util.quadratic(a,b,c);
console.log("The values of x are "+root[0]+" and "+root[1]);