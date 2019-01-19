/***********************************************************
 * 
 * Purpose      :   Create a Linked List array.
 * 
 * @description
 * 
 * @file        :   linkedList.js
 * @overview    :   Add all the functionalities of Linked List.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/
/**
 * To create a new node which contains elements and holds the next element in it.
 */
class Node {
    constructor(element) {
        this.element = element;
        /**
         * next holds next element, here as the node created is new it points to null.
         */
        this.next = null;
    }
}
class LinkedList {
    /**
     * Initialize head pointing to NULL and size to Zero.
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /**
     * @description To add the element to the end of the list.
     * 
     * @param {object} element 
     */
    add(element) {
        /**
         * create node for the element.
         */
        var node = new Node(element);
        /**
         * if list is empty make head point to the above node.
         */
        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }
        /**
         * traverse to the last node and make last node to point to the above node.
         */
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = node;
        }
    }
    /**
     * @description Search the element is present or not in the list. 
     * 
     * @param {object} item
     * 
     * @returns boolean true-if present. 
     *                  false -if not present. 
     */
    search(item) {
        /**
         * if list is empty return false.
         */
        if (this.head == null) {
            return false;
        }
        var curr = this.head;
        /**
         * traverse till the last node and compare each node with the element
         * return true if any node matches else return false.
         */
        while (curr) {
            if (curr.element == item)
                return true;
            curr = curr.next;
        }
        return false;
    }
    /**
     * @description To add the element to the suitable position when list is in ordered.
     * 
     * @param {object} element 
     */
    addToPos(element) {
        var node = new Node(element);
        /**
         * if the list is empty add to 1st position.
         */
        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }
        /**
         * if the element is smaller than first element add the element to first.
         */
        else if (this.head.element > element) {
            this.insertFirst(element);
            return;
        }
        /**
         * Insert to correct position.
         */
        else {
            var current = this.head;
            var previous = current;
            while (current.next) {
                if (element > current.element) {
                    previous = current;
                    current = current.next;
                }
                else {
                    previous.next = node;
                    node.next = current;
                    break;
                }
            }
            if (!current.next) {
                current.next = node;
            }
            this.size++;
            return;
        }
    }
    /**
     * @description Delete the first similar element if it is present in the list.
     * 
     * @param {object} element 
     */
    remove(element) {
        var curr = this.head;
        /**
         * If the element is first element in the list,call deleteFirst function.
         */
        if (curr.element == element) {
            this.deleteFirst();
            return;
        }
        var prev = curr;
        /**
         * traverse till pointer reaches the element
         */
        while (curr) {
            if (curr.element == element) {
                prev.next = curr.next;
                this.size--;
                return curr.element;

            }
            /**
             * de-link the node of the element.
             */
            prev = curr;
            curr = curr.next;
        }
        return null;
    }
    /**
     * @description To display the contents of the list
     * 
     * @returns String of concatenated elements of the list.
     */
    display() {
        /**
         * Starting from head traverse till pointer pointing null.
         */
        var curr = this.head;
        var str = "";
        /**
         * Stop at last element where element points to null.
         */
        while (curr) {
            /**
             * Concatenate the elements to str variable one by one.
             */
            str = str + curr.element;
            //add space between elements
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    /**
     * @description To insert the element to 1st position.
     * 
     * @param {element} element.
     */
    insertFirst(element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }
        else {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }
    }
    /**
     * @description To insert the element to particular position.
     * 
     * @param {number} index 
     * @param {element} element 
     */
    insert(index, element) {
        if (index == 1) {
            this.insertFirst(element);
            return;
        }
        if (this.head == null) {
            return;
        }
        var node = new Node(element);
        var count = 0, prev = this.head, curr = this.head;
        try {
            while (curr) {
                if (c == index - 1) {
                    prev.next = node;
                    node.next = curr;
                    this.size++;
                    return;
                }
                count++;
                prev = curr;
                curr = curr.next;
            }
            return false;
        }
        catch (exception) {
            console.log(exception + "Enter correct index");
        }

    }
    /**
     * @description To delete the first element from the list.
     */
    deleteFirst() {
        if (this.head == null) {
            console.log("Linked List empty");
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
    }

}
module.exports = {
    LinkedList
}