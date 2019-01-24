var utility=require('../Utility/util');
var filestream=require('fs');
var content=filestream.readFileSync('../jsonFiles/address.json');
var data=JSON.parse(content);

function address()
{
  utility.address_book(data);
}
address();