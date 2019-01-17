
/***************************************************************************** 
* 
*  Purpose         : Find all prime number in range 0-1000.
* 
*  @description    
* 
*  @file           : Prime1to1000.js
*  @overview       : primes function to Find all prime number in range 0-1000..
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 16-01-2019
*
******************************************************************************/
var util = require('../Utility/DataStructureUtil');
var show = require('util');
function primes() {
    var primes = [];
    var initial = 0;
    var final = 100;
    for (let i = 0; i < 10; i++) {
        primes[i] = util.findPrime(initial, final);
        show.print(initial + "-" + final + " : " + "[ " + primes[i] + " ]");
        initial = initial + 100;
        final = final + 100;
    }
    }
primes();