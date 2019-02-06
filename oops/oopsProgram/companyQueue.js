/**
 * purpose:maintain DateTime of the transaction in a Queue implemented using LinkedList 
 *         to indicate when the transactions were done.
 * @description
 * @file       :  companyQueue.js
 * @author     :  Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version    :  1.0
 * @since      :  2-02-2019
 */
var utility = require('./queue.js')
var prompt = require('readline-sync');
var util = require('../Object Oriented Programs/Utility');
var q = new utility();

var d = new Date();
//stockAccount class
class StockAccount {
    //for buy the stock
    buy() {
        var flag = true;
        var num = prompt.question('enter number of stocks to be purchased..... ');
        while (flag) {
            if (!isNaN(num)) {
                flag = false;
            } else {
                num = prompt.question('Wrong input!! enter number of stocks to be purchased..... ')
            }
        }
        for (let i = 0; i < num; i++) {
            var name = util.inStockName();
            var number = util.inNoOfShare();
            var price = util.inSharePrice();
            var date = (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear());
            var time = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
            let user = {
                name: name,
                number: number,
                price: price,
                date: date,
                time: time
            };

            console.log('Successfully purchased the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
            //put into the queue
            q.enqueue(user);
        }
    }
    //for sell the stock
    sell() {
        var flag = true;
        var num = prompt.question('enter number of stocks to be sell..... ');
        while (flag) {
            if (!isNaN(num)) {
                flag = false;
            } else {
                num = prompt.question('Wrong input!! enter number of stocks to be sell..... ')
            }
        }
        var res = -1;
        for (let i = 0; i < num; i++) {
            //delete from queue
            res = q.dequeue();
            if (res != -1)
                console.log("Selled stock is ");
            console.log(res);//print the deque data
        }
    }
    //for printing the queue
    stockList() {
        q.printQ();
    }
}
//creating the object of account class
var stock = new StockAccount();
while (1) {
    console.log('1.Buy Stocks')
    console.log('2.Sell Stocks')
    console.log('3.Print Stock list')
    console.log('4.Exit')
    var choice = prompt.question('What do u want to do ?')
    switch (choice) {
        case '1':
            stock.buy();
            break;
        case '2':
            stock.sell()
            break;

        case '3': //stock.stockReport();
            stock.stockList();
            break;

        case '4': process.exit()

        default: console.log('No Such Option ')
            break;
    }
}

stock.stockList();