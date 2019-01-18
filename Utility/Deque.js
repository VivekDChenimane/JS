/************************************************************
 * Execution    :   1. cmd> node Deque.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Deque.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Create a Deque array.
 * 
 * @description
 * 
 * @file        :   Deque.js
 * @overview    :   Add all the functionalities of Deque.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/
class Deque {
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }

    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    isEmpty() {
        return this.front == -1;
    }

    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }

    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }


    PalindromeChecker(str) {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        while (this.front != this.rear && this.front < this.rear) {

            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}

module.exports = {
    Deque
}