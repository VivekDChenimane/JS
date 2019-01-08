const readline = require('readline-sync');
const util = require('../Utility/Utility');
var num = readline.questionInt("Enter the number of distinct coupons to be generated");
var couponArr = util.randomArray(num);
for(let i=0;i<couponArr.length;i++)
{
    console.log(couponArr[i]);
}