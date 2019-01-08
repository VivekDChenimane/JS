const readline = require('readline-sync');
const util = require('../Utility/Utility');
var flag=0;
while(flag==0)
{
    var range = readline.questionInt("Enter the value to get the power of 2 within that Range");
    if(range<32){
        util.powerOfTwo(range);
        flag=1;
    }
    else
        console.log("Enter within the range");
}