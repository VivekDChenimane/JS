var readline = require('readline-sync');
var ll = require('../Utility/LinkedList');
var util= require('../Utility/DataStructureUtil');
var arr=[];
var data = util.readfile('../hashNumbers.txt');
var data = util.parse(data);
console.log(data);
var slots=readline.questionInt("Enter the number of slots you want to create");
for(let pos=0;pos<data.length;pos++){
    let index = data[pos]%slots;
    console.log(index);
    console.log(arr[index]);
    if(arr[index]==undefined){
        arr[index]=new ll.LinkedList;
        arr[index].insertFirst(data[pos]);
    }
    else
        arr[index].addToPos(data[pos]);
}
console.log("-----------");
for(let i=0;i<slots;i++){
    arr[i].display();
}
