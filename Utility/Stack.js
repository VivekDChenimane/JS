
class Stack{
    constructor(){
        this.stk = [];
        this.size=0;
        this.top=-1;
    }
    push(element){
        
        this.stk[++this.top]=element;
        this.size++;
    }
    pop(){
        if(this.top==-1)
        {
            console.log("Stack underflow");
            return;
        }
        this.size--;
        return this.stk[--this.top];
    }
    peek(){
        if(this.top==-1)
        {
            console.log("Stack is empty");
            return;
        }
        console.log(this.stk[this.top]);
    }
    isEmpty(){
        if(this.top==-1)
            return true;
        return false;
    }
    size(){
        return this.size;
    }
}
module.exports=
{
    Stack
}