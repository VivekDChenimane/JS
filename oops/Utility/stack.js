/************************************************************
 * 
 * Purpose      :   Create a Stack array.
 * 
 * @description
 * 
 * @file        :   stack.js
 * @overview    :   Add all the functionalities of Stack.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/
let util = require('../Utility/linkedList');
class Stack {
    /**
     * Intialize the values
     */
    constructor() {
        this.stk = new util.LinkedList;
        this.size = 0;
        this.top = -1;
    }
    /**
     * @description To add the element to end of the array.
     * 
     * @param {object} ele 
     */
    push(ele) {
        this.size++;
        this.top++;
        this.stk.push(ele);

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
        this.top--;
        return this.stk.pop();
    }
    /**
     * @description To print the element present in the last position.
     */
    peek() {
        let ele = this.stk.peek();
        console.log(ele);
        return;
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
            return true;
        }
        console.log("Stack is not empty");
        return false;
    }
    /**
     * @description displays the contents of the stack.
     */
    dispaly() {
        this.stk.show();
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