var readline = require('readline-sync');
var qutil = require('../Utility/Queue');
//var person = require('../Data Structure/Person');
var treasure = require('../Data Structure/Treasury');
var counterQ = readline.questionInt("Enter the number of persons in the queue.");
var q = new qutil.Queue(20);
for(let index=0;index<counterQ;index++){
    readline.question("Enter the name")
}
