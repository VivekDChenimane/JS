/************************************************************
 * Execution    :   1. cmd> node addressBook.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon addressBook.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To access the phone book data and do CURD operations.
 * 
 * @description
 * 
 * @file        :   addressBook.js
 * @overview    :   To perform CURD operations on json file for phone book.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
/**
 * @description call Utility classes to parse the json to js object.
 */
var utility=require('../Utility/addressBookUtil');
var util = require('../Utility/utility');
var data = util.readFromFile('../jsonFiles/address.json');
data = util.parse('../jsonFiles/address.json')
/**
 * @description Access the utility of address book.
 */
function address()
{
  utility.address_book(data);
}
address();