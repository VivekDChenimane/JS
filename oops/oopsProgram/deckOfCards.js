/************************************************************
 * Execution    :   1. cmd> node deckOfCards.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon deckOfCards.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   deckOfCards.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
/**
 * @description import queue of linked list from Utility
 */
const queue = require('../Utility/queue');
/**
 * @description import algoUtil for using insertion sort.
 */
var sort = require('../../Utility/algoUtil');
function deckOfCards() {
    var person = [];
    person[0]=new queue.Queue;
    person[1]=new queue.Queue;
    person[2]=new queue.Queue;
    person[3]=new queue.Queue;
    var suit = ["♣️", "🔸 ", "❤️ ", "♠️"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    var deck = [];
    var n = suit.length * rank.length;
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            var temp = "";
            deck.push(suit[i] + rank[j] + "");
        }
    }
    for (let i = 0; i < n; i++) {
        var random = parseInt(Math.random() * deck.length)
        var temp = deck[i];
        deck[i] = deck[random];
        deck[random] = temp;
    }
    var value=0;
    for(let index=0;index<=3;index++){
        var array=[];
        let init=0;
        while(init<13){
            array[init++]=deck[value++];
        }
        array=sort.insertionSort(array);
        person[index]=array;
    }
    var value=0;
    for(let index=0;index<=3;index++){
        console.log("The player"+(index+1)+" cards in order is- "+person[index]);
        console.log();
    }
}
deckOfCards();