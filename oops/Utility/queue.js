 /***********************************************************
 * 
 * Purpose      :   Create a Queue array.
 * 
 * @description
 * 
 * @file        :   queue.js
 * @overview    :   Add all the functionalities of Queue.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   24-01-2019
 * 
 * **********************************************************/
var util = require('../Utility/linkedList');
class Queue {
    /**
     * Initialize the queue.
     */
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.items = new util.LinkedList;
        this.size = 0;
    }
    /**
     * @description Add the element to the queue.
     * 
     * @param {element} ele 
     */
    enque(ele) {
        if (this.front == -1) {
            this.front++;
        }
        this.rear++;
        this.items.push(ele);
        this.size++;
    }
    /**
     * @description To delete the element from the queue.
     */
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items.deleteFirst();
        this.front++;
        this.Size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }
    /**
     * Display the elements in the queue.
     */
    display() {
        return this.items.show();

    }
    getData(){
       return this.items.getData();
    }
    /**
     * Checks if the queue is empty or not.
     */
    isEmpty() {
        if (this.size > 0) {
            return false;
        }
        return true;
    }


}

module.exports = { 
    Queue
}