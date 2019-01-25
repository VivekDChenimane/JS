/************************************************************
 * Execution    :   1. cmd> node clinique.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon clinique.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   clinique.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
var readline = require('readline-sync');
var fileSystem = require('fs');
var util = require('../Utility/utility');
var util1 = require('../Utility/cliniqueUtil');
/**
 * @param patient @param doctor store information and manage list 
 */
function clinique() {
    var data = util.readFromFile('../jsonFiles/clinique.json');
    var clinique = JSON.parse(data);
    do {
        var option = readline.questionInt("1.Appointment\n2.Print List\n3.Search\n4.Exit");
        switch (option) {
            case 1:
                util1.appointment();
                break;
            case 2:
                console.log(clinique);
                break;
            case 3:
                util1.search();
                break;
            case 4:
                console.log("ThankYou!");
                break;
            default:
                console.log("Plz enter valid option!!");
        }
    } while (option != 4);
}
clinique();