/************************************************************
 * Execution    :   1. cmd> node NumberOrderedList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon NumberOrderedList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Search a number if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   NumberOrderedList.js
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
var ll = require('../Utility/LinkedList');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var util = require('../Utility/DataStructureUtil');
try {
    var linklist=new ll.LinkedList();
    let data = util.readfile('../number.txt');
    data = util.parse(data);
    data = util.insertionSort(data);
    console.log(data);
    for(let index=0;index<data.length;index++)
        linklist.add(data[index]);
    var display = linklist.display();
    console.log(display);
    let num = readline.questionInt("Enter the number you want to search");
    var check = linklist.search(num);
    console.log(check);
    if(check){
        linklist.remove(num);
    }
    else{
        linklist.addToPos(num);
    }
    var display = linklist.display();
    console.log(display);
    util.writefile('../number.txt',display)
} catch (err) {
  console.error(err);
}
