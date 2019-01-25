/************************************************************
 * 
 * Purpose      :   Utility for OOPS programs.
 * 
 * @description
 * 
 * @file        :   stockAccountUtil.js
 * @overview    :   All the functionalities required for Algorithm programs are coded here.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   24-01-2019
 * 
 * **********************************************************/
var util = require('./utility');
var readline = require('readline-sync');
//var companyData = util.readFromFile('../jsonFiles/company.json');
var linkedList = require('./linkedList');
var customerFile = "../jsonFiles/stack1.json";
var companyFile = "../jsonFiles/company.json";
class Customer{
    constructor(name,id,amount)
    {
        this.name=name;
        this.id=id;
        this.amount=amount;
        this.shares=[];
    }
}
class Company{
    constructor(name,symbol,no_of_shares,available){
        this.name=name;
        this.symbol=symbol;
        this.no_of_shares=no_of_shares;
        this.available=available;
    }
}
module.exports={
createStackAccount(file){
    var path = "../jsonFiles/"+file+".json";
    var name = readline.question("Enter the name:");
    var id = readline.questionInt("Enter the ID:");
    var amount = readline.questionInt("Enter the balance");
    var customer = new Customer(name,id,amount);
    this.saveAccount(path,customer);
    return;
},
saveAccount(path,data){
        data = JSON.stringify(data);
        util.writeToFile(path, data);
        return;
}
,
addCompany(){
    
}
}