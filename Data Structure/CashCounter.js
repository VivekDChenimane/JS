var readline = require('readline-sync');
var qutil = require('../Utility/Queue');
var person = require('../Data Structure/Person');
var treasure = require('../Data Structure/Treasury');
var qno = readline.questionInt("Enter the number of persons in the queue less than 20");
var q = new qutil.Queue(25);
var software = new treasure.Treasury();
var pperson = [];
var token = 0;
for(token;token<qno;token++)
{
   pperson[token] = new person.Person;
   q.enque(person[token]);
}
while(token>0){
    token--;
    var casher = q.deque();
    console.log(casher.balance());
    while(true){
    var check = readline.questionInt("Enter 1.Deposit 2.withdraw");
    var amount = readline.questionInt("Enter the amount");
    if(check==1){software.receiveAmount(amount);break;}
    else if(check==2){software.dispatchAmount(amount);break;}
    else{console.log("Enter the correct input");}}
}
11