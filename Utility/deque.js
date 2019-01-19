/***********************************************************
 * 
 * Purpose      :   Create a Deque array.
 * 
 * @description
 * 
 * @file        :   deque.js
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
    /**
     * @description To check the deque is full.
     */
    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    /**
     * @description To check the deque is empty.
     */
    isEmpty() {
        return this.front == -1;
    }
    /**
     * @description To add the element from front.
     * 
     * @param {element} item 
     */
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
    /**
     * @description To add the element from rear.
     * 
     * @param {element} item 
     */
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
    /**
     * Get the element of array from front.
     */
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    /**
     * Get the element of array from rear.
     */
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }
    /**
     * @description To check if the string is palindrome or not.
     * 
     * @param {String} str 
     * 
     * @returns boolean value.
     */
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