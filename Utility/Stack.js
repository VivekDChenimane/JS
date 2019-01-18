/************************************************************
 * Execution    :   1. cmd> node Stack.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Stack.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Create a Stack array.
 * 
 * @description
 * 
 * @file        :   Stack.js
 * @overview    :   Add all the functionalities of Stack.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/
class Stack {
    /**
     * Intialize the values
     */
    constructor() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    /**
     * @description To set the capacity of the stack.
     * 
     * @param {Integer} capacity 
     */
    stack(capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    }
    /**
     * @description To add the element to end of the array.
     * 
     * @param {object} ele 
     */
    push(ele) {

        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;

    }
    /**
     * @description To remove the element present in the last position.
     * 
     * @returns last element.
     */
    pop() {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    }
    /**
     * @description To print the element present in the last position.
     */
    peek() {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    }
    /**
     * @description To get the size of the stack.
     * 
     * @returns Stack size.
     */
    getsize() {
        return this.size;
    }
    /**
     * @description Prints wheather stack is empty or not.
     */
    isEmpty() {
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }
    /**
     * @description displays the contents of the stack.
     */
    dispaly() {
        var string = "";
        for (let i = 0; i <= this.top; i++) {
            string = string + this.stk[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    }
    /**
     * @description reverse the given stack.
     * 
     * @param {stack} stk 
     * 
     * @returns new reversed stack
     */
    reveseStack(stk) {
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }


}

module.exports = {
    Stack
}