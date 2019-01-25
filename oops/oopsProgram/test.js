/************************************************************
 * 
 * Purpose      :   To test the codes.
 * 
 * @description
 * 
 * @file        :   test.js
 * @overview    :   All the functionalities required for Algorithm programs are coded here.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   24-01-2019
 * 
 * **********************************************************/
var util = require('../Utility/utility');
var data = util.readFromFile('../jsonFiles/company.json');
var linkedList = require('../Utility/linkedList');
class Company{
    constructor(name,symbol,no_of_shares,available){
        this.name=name;
        this.symbol=symbol;
        this.no_of_shares=no_of_shares;
        this.available=available;
}
}
/*data = JSON.parse(data);
var linkList=new linkedList.LinkedList;
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        data[key].forEach(element => {
            linkList.push(element);
            console.log(element);
        });
    }
}*/
var company = new Company("vivek","$",100,20);
var str = JSON.stringify(company.getSymbol());
console.log(str);
str=str+company.getObject();
util.writeToFile('../jsonFiles/sample1.json',str);
/*var check = linkList.getLinkList();
console.log(check);
data = JSON.stringify(check);
console.log(data);
util.writeToFile('../jsonFiles/sample1.json');
/*
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        while(!element.hasOwnProperty(undefined)){
            linkList.push(element);
        }
    }
}
console.log(linkList);
console.log(linkList.search(Google));
//var company = new Company("Facebook","#",100,20);
//console.log(company);
/*for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        if(element=="Twitter"){

        }
    }
}
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        console.log(element);
    }
}
/*data = JSON.stringify(data);
util.writeToFile('../jsonFiles/company.json',data);
*/