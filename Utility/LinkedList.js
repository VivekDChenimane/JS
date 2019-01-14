
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
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = node;
        }
    }
    search(item){
        if(this.head==null){
            return false;
        }

        var curr=this.head;
        while(curr){
            if(curr.element==item){
                return true;
            }
              
            curr=curr.next;
        }
        return false;
}
remove(element){

    var curr=this.head;
    if(curr.element==element){
        this.deleteFirst();
        return;
    }
    var prev=curr;
    while(curr){
        if(curr.element==element){
            prev.next=curr.next;
            this.size--;
            return curr.element;

        }
        
        prev=curr;
        curr=curr.next;
    }
return null;
}
display(){
    var curr=this.head;
    var str="";
    while(curr){
        str=str+curr.element+" ";
        if(curr.next!=null){
            str=str+" ";
        }
        curr=curr.next;
    }
    return str;
}
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