/************************************************************
 * Execution    :   1. cmd> node StopWatch.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon StopWatch.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To calculate the time between Start and Stop.
 * 
 * @description
 * 
 * @file        :   StopWatch.js
 * @overview    :   Get the time from the system to get operations done. 
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
const util = require('../Utility/Utility');
var  stopWatch=()=>{
    var checker = readline.questionInt("Enter 1 to start")
    if(checker)
    var n = util.timeSecond();
    console.log("Time started")
    checker = readline.questionInt("Enter 0 to stop the stopwatch")
    if(!checker)
    var n1 = util.timeSecond();
    console.log("Time stoped")
    console.log("The time laps is "+Number(n1-n)+"sec.")
}
stopWatch();