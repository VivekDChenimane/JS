class Queue {
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.items = [];
        this.size=0;
    }

    MyQueue(capacity) {
        this.capacity = capacity;
        var items = new items(capacity);
    }
   enque(ele)
   {
       if(this.rear==this.capacity-1)
       {
           console.log("Queue is full");
           return;
       }
       if(this.front==-1)
       {
           this.front++;
           
           
          // return true;
       }
       this.items[++this.rear]=ele;
       this.Size++;
   }
   deque()
   {
       if(this.front==-1)
       {
           console.log("Queue is empty");
           return null;
       }
      var  ele=this.items[this.front++];
      this.Size--;
       if(this.front>this.rear)
       {
           this.front=this.rear=-1;
       }
       return ele;
   }
   display()
   {
       var res="";
       for( var i=this.front;i<=this.rear;i++)
       {
           var res=res+this.items[i];
           if(i<this.rear)
           {
               res=res+",";
           }
           
       }
       return res;
       
   }
   isEmpty()
   {
       if(this.size>0)
       {
           return false;
       }
       return true; 
   }
   

}

module.exports={
    Queue
}