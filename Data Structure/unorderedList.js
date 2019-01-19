/************************************************************
 * Execution    :   1. cmd> node unorderedList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon unorderedList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   unorderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
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
    let data = util.readfile('../test.txt');
    /**
     * push each word into linked list.
     */
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
    /**
     * To display the content of the linked list.
     */
    var display = linklist.display();
    let name = readline.question("Enter the name you want to search");
    /**
     * search for the entered name,if present delete the name from list and if it is not 
     * present add the element to the linked list. 
     */
    var check = linklist.search(name);
    console.log(check);
    if (check) {
        linklist.remove(name);
    }
    else {
        linklist.add(name);
    }
    /**
     * Display the contents of the list.
     */
    var display = linklist.display();
    /**
     * Write the contents to the file.
     */
    util.writefile('../test.txt', display)
}
/**Prints the error if any error occurs. */
catch (err) {
    console.error(err);
}
