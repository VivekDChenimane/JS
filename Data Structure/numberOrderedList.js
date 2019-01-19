/************************************************************
 * Execution    :   1. cmd> node numberOrderedList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon numberOrderedList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Search a number if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   numberOrderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities of LinkedList.
 */
var ll = require('../Utility/linkedList');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var util = require('../Utility/dataStructureUtil');
try {
    /**
    * creating a reference to LinkedList class.
    */
    var linklist = new ll.LinkedList();
    /**
     * variable which holds all the content of the file.
     */
    let data = util.readfile('../number.txt');
    /**
     * parse all the contents to number.
     */
    data = util.parse(data);
    /**
     * sort the numbers.
     */
    data = util.insertionSort(data);
    /**
     * push each element to the linked list.
     */
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
    var display = linklist.display();
    let num = readline.questionInt("Enter the number you want to search");
    /**
     * search for the number and set the check.
     */
    var check = linklist.search(num);
    console.log(check);
    /**
     * remove if present add if not present.
     */
    if (check) {
        linklist.remove(num);
    }
    else {
        linklist.addToPos(num);
    }
    /**
     * display the updated list.
     */
    var display = linklist.display();
    /**
     * write back to the file.
     */
    util.writefile('../number.txt', display)
}
/**
 * print the error if any occurs.
 */
catch (err) {
    console.error(err);
}
