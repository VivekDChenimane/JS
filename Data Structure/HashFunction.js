/************************************************************
 * Execution    :   1. cmd> node HashFunction.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon HashFunction.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To store the number by hashing to search the element efficiently.
 * 
 * @description
 * 
 * @file        :   HashFunction.js
 * @overview    :   Use mod function to create the solts and store the numbers using linked.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/
var readline = require('readline-sync');
var ll = require('../Utility/LinkedList');
var util = require('../Utility/DataStructureUtil');
var take = require('util');
var arr = [];
var data = util.readfile('../hashNumbers.txt');
var data = util.parse(data);
console.log(data);
var slots = readline.questionInt("Enter the number of slots you want to create");
for (let pos = 0; pos < data.length; pos++) {
    let index = data[pos] % slots;
    if (arr[index] == undefined) {
        arr[index] = new ll.LinkedList;
        arr[index].insertFirst(data[pos]);
    }
    else
        arr[index].addToPos(data[pos]);
}
console.log("-----------");
for (let i = 0; i < slots; i++) {
    take.print(i + " slot => ")
    arr[i].display();
}
var search = readline.questionInt("Enter the number you want to search");
var see = search % slots;
var flag = arr[see].search(search);
console.log(flag);
if (flag)
    arr[see].remove(search);
else
    arr[see].addToPos(search);
for (let i = 0; i < slots; i++) {
    take.print(i + " slot => ");
    arr[i].display();
}