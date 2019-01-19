/************************************************************
 * Execution    :   1. cmd> node anagramPrime.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon anagramPrime.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   .
 * 
 * @description
 * 
 * @file        :   anagramPrime.js
 * @overview    :   Find the prime numbers within the range and display.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../Utility/dataStructureUtil');
function prime() {
    /**
     * Array anaprime which stores all the ranges in a sequence,i.e in array.
     */
    var anaprime = [];
    /**
     * initialy start from 0-100.
     */
    var initial = 0;
    var final = 100;
    for (let index = 0; index < 10; index++) {
        /**
         * Find all the primes in the range and filters to anagram out of primes.
         */
        anaprime[index] = util.findAnaPrime(initial, final);
        if (anaprime[index].length > 0)
            console.log(initial + " - " + final + " ==> " + anaprime[index]);
        initial = initial + 100;
        final = final + 100
    }
}
prime();