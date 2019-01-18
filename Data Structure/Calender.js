/************************************************************
 * Execution    :   1. cmd> node Calender.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Calender.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To display the calender of the month.
 * 
 * @description
 * 
 * @file        :   Calender.js
 * @overview    :   Get the month and year through command line and display the month calender.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/
var take = require('util');
/**
 * import the Utility class to use the functionalities of Queue.
 */
var que = require('../Utility/Queue');
/**
 * import the Utility class to use the functionalities.
 */
var util1 = require('../Utility/AlgoUtil');
var util2 = require('../Utility/Utility');
var util3 = require('../Utility/DataStructureUtil');
function calender() {
    /**
     * create references for queue for day and date respectively.
     */
    var dayQue = new que.Queue;
    var dateQue = new que.Queue;
    /**
     * read the input from command line and validate.
     */
    if (isNaN(+process.argv[2]) || isNaN(+process.argv[3])) {
        console.log("Enter valid input");
        return;
    }
    var month = +process.argv[2];
    var year = +process.argv[3];
    /**
     * Get the day of the 1st of the month
     */
    var day = util1.dayOfWeek(1, month, year);
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
    var Month = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'may', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var leap = util2.leap(year);
    if (leap = true) {
        dates[2] = 29;
    }
    /**
     * enque all the weeks to queue.
     */
    for (var i = 0; i < week.length; i++) {
        dayQue.enque(week[i]);
    }
    /**
     * enque the dates based on the number of days in that month based on the array dates.
     */
    for (var i = 1; i <= dates[month]; i++) {
        dateQue.enque(i);
    }
    /**
     * To print year and month in center.
     */
    util3.printCenter(year);
    util3.printCenter(Month[month]);
    for (var i = 0; i < week.length; i++) {
        take.print(dayQue.deque() + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            take.print(" " + dateQue.deque() + "   ");

        }
        if (i > 9) {
            take.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }
    }
    console.log("\n\n");
}
calender()