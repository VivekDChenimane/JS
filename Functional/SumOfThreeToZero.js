const readline = require('readline-sync');
const util = require('../Utility/Utility');
var num = readline.question("Enter the number of elements you want to insert inside the array ");
var arr = util.twoDArray(1,num);
console.log(arr);
if(num<3)
    console.log("Since the number of elements in an array is less than three,there is no triplets whose sum is 0.");
else
    util.triplet(arr);
