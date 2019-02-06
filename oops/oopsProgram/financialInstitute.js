/**
 * purpose     :  A program  used by a financial institution to keep track of customer information
 *                in this we can buy stock or sell the stock.
 *             
 * @description
 * @file       :  financialInstitute.js
 * @author     :  Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version    :  1.0
 * @since      :  2-02-2019
 * 
 */
//require the file
var stk=require('../Object Oriented Programs/StockAccount');
//create object of stock account
var st = new stk.StockAccount('stockaccount.json');
var read=require('readline-sync');
var val,flag1=true;
while(flag1){//for validating
console.log("What you want \n 1.Buy the Stock \n 2.Sell the Stock");
val = read.question(" 3.ValueOf \n 4.Show Report\n 5.Save Report\n 6.Exit ");
switch (Number(val)) {
    case 1:
        st.buy();
        break;
    case 2:
        st.sell();
        break;
    case 3:
        console.log("Total value for stock is "+st.valueOf());
        break;

    case 4:
        st.printReport();
        break;
    case 5:
        st.save('stockaccount.json');
        break;
    case 6:
         flag1=false;
         break;
    default:
        console.log("Wrong Key ");
        break;
}
console.log();
}