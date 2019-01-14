var readline = require('readline-sync');
var util = require('../Utility/LinkedList');
const fs = require('fs');
try {
    var linklist=new util.LinkedList();
    
    let data = fs.readFileSync('../test.txt', 'utf8');
    data = data.split(',');
    for(let index=0;index<data.length;index++){
        linklist.add(data[index]);
    }
    let name = readline.question("Enter the name you want to search");
    var check = linklist.search(name);
    console.log(check);
    if(check){
        linklist.remove(name);
    }    
    else
        linklist.add(name);
    var display = linklist.display();
    console.log(display);
} catch (err) {
  console.error(err);
}
