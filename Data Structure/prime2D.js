/************************************************************
 * Execution    :   1. cmd> node prime2D.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon prime2D.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To display all prime numbers within 1000 with interval as 100.
 * 
 * @description
 * 
 * @file        :   prime2D.js
 * @overview    :   Find the prime numbers within the range and display.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
var util = require('../Utility/dataStructureUtil');
function primes() {
    var primes = [];
    var initial = 0;
    var final = 100;
    /**
     * divide into 10 divisions with 100 as the interval
     */
    for (let i = 0; i < 10; i++) {
        /**
         * Find all the primes and assign to an array.
         */
        primes[i] = util.findPrime(initial, final);
        console.log(initial + "-" + final + " : " + "[ " + primes[i] + " ]");
        initial = initial + 100;
        final = final + 100;
    }
}
primes();