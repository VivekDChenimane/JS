/**
 * purpose :maintain the Stock Purchased or Sold in a Stack implemented using Linked List
 *          to indicate transactions done.
 * @description
 * @file       :  companyStack.js
 * @author     :  Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version    :  1.0
 * @since      :  2-02-2019
 */

var EX = {};
/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function () {
    this.item = null;
    this.next = null;
}

EX.LinkedStack = function () {
    var head = null;
    var size = null;

	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
    this.pushToStack = function (item) {
        var node = new EX.StackNode();
        node.item = item;
        node.next = null;
        if (size < 1 && head === null) {
            head = node;
            head.next = null;
            size = 1;
        } else {
            var current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            size += 1;
        }
    }

	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
    this.popFromStack = function () {
        var current = head;
        if (size === 0) {
            return;
        }
        if (size === 1) {
            head = null;
            size = 0;
            return current;
        }
        if(current==null){
            console.log("\n You Dont have stock in your account ");
            process.exit();
            return;
        }
        var prev = current;  // 543
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        size -= 1;
        console.log(current);
        return current;
    }

    // Function to check if stack is empty
    this.isStackEmpty = function () {
        return (size < 1) ? true : false;
    }

    // Function to get top item of the stack
    this.stackTop = function () {
        var current = head;
        if (size > 0 && head !== null) {
            while (current.next !== null) {
                current = current.next;
            }
            return current.item;
        } else {
            console.log("There is no item in the stack");
            return null;
        }
    }

    this.printStack = function () {
        var current = head;
        if(current==null){
            console.log("Empty stock ");
            return;
        }
        while (current.next !== null) {
            console.log(current.item);
            current = current.next;
        }
        console.log(current.item);
    }

}



var stack = new EX.LinkedStack();
class StockAccount {
//method for buy the stock
buy()
{   var flag=true;
    var util=require('../Object Oriented Programs/Utility');
    var prompt = require('readline-sync')
    var num = prompt.question('enter number of stocks to be purchased..... ');
     while(flag){
         if(!isNaN(num)){
          flag=false;
         }else{
            num = prompt.question('Wrong input!! enter number of stocks to be purchased..... ')
         }
     }
    for (var i = 0; i < num; i++) {
        var name = util.inStockName();
        var number = util.inNoOfShare();
        var price = util.inSharePrice();
        var customer = {
            name: name,
            number: number,
            price: price
        }
        stack.pushToStack(customer);
        console.log("successfully purchased the stock");
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log("Purchase Time : " + time);
    }
}
//method for sell the stock
sell()
{ var flag=true;
    var prompt = require('readline-sync');
    var num = prompt.question('enter number of stocks to be sold..... ');
    while(flag){
        if(!isNaN(num)){
         flag=false;
        }else{
           num = prompt.question('Wrong input!! enter number of stocks to be sold..... ');
        }
    }
    for (var i = 0; i < num; i++) 
        {
          stack.popFromStack();
        }
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("Stock sold time : " + time);
}
//print the stock
stockReport() 
{
    stack.printStack();
}
}
var prompt=require('readline-sync');
var c=new StockAccount();
while (1) {
    console.log('1.Buy Stocks');
    console.log('2.Sell Stocks');
    console.log('3.Print Stock list');
    console.log('4.Exit');
    var choice = prompt.question('What do u want to do ?');
    switch (choice) {
        case '1': 
        c.buy();
            break;
        case '2': 
        c.sell();
            break;

        case '3': //stock.stockReport();
        c.stockReport();
            break;

        case '4': process.exit()

        default: console.log('No Such Option ');
            break;
    }
}
c.stockReport();