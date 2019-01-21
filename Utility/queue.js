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
 * @since       :   14-01-2019
 * 
 * **********************************************************/
class Queue {
    /**
     * Initialize the queue.
     */
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.items = [];
        this.size = 0;
    }
    /**
     * @description Set the capacity of the queue.
     * 
     * @param {number} capacity 
     */
    MyQueue(capacity) {
        this.capacity = capacity;
        var items = new items(capacity);
    }
    /**
     * @description Add the element to the queue.
     * 
     * @param {element} ele 
     */
    enque(ele) {
        if (this.rear == this.capacity - 1) {
            console.log("Queue is full");
            return;
        }
        if (this.front == -1) {
            this.front++;


            // return true;
        }
        this.items[++this.rear] = ele;
        this.Size++;
    }
    /**
     * @description To delete the element from the queue.
     */
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];
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
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        return res;

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