/************************************************************
 * Execution    :   1. cmd> node Anagram.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Anagram.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Checks if two Strings are Anagram or not.
 * 
 * @description
 * 
 * @file        :   Anagram.js
 * @overview    :   Checks two String if they are simply a rearrangement of each other.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   09-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const readline = require('readline-sync');

module.exports={
prime(range)
{
	var primes=[];
	primes[0] = 2;
	var primenos = 1;
	var n=2;
    for(var i=2;i<range;i++) 
	{
	    n++;
    	for(var j=primenos-1;j>=0;j--)
		{
			if(n%primes[j]==0)
				break;
			if(primes[j]==2)
			{
				primes[primenos]=n;
				primenos++;
				break;
			}
		}
	}
	for(var i=0;i<primenos;i++) {
		console.log(primes[i]);
	}
	return primes;
},
createArray(num){
	var arr=[];
	for(let index=0;index<num;index++)
		arr[index]=readline.question("Enter the element");
	return arr;
},
createNumberArray(num){
	var arr=[];
	for(let index=0;index<num;index++)
		arr[index]=Number(readline.question("Enter the element"));
	return arr;
},
insertionSort(input){
	var temp;
    for (var i=1; i<input.length; i++) {
        for(var j = i ; j > 0 ; j--){
            if(input[j] < input[j-1]){
                temp = input[j];
                input[j] = input[j-1];
                input[j-1] = temp;
            }
        }
    }
    return input;
}
,
bubbleSort(input) {
	var temp;
	for(var i=0;i<input.length;i++)
	{
		for(var j=0;j<(input.length-i-1);j++) 
		{
			if(input[j]>input[j+1])
			{
			    temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
			}
		}
	}
	return input;
},
binarySearch(left,right) {
	var mid = Math.floor(left+(right-left)/2);
	if(left<right)
	{  
		var check;
		if(left==right-1)
		{
			check = readline.question("Is the number "+left+"If yes press -> y, If no press ->n");	
			if(check=='y') 
				return left;
			if(check=='n') 
				return right;
		}
		check = readline.question("Is the number in the range"+mid+"-"+right+"If yes press -> y, If no press ->n");
		if(check=='y') 
			mid=this.binarySearch(mid,right);
		if(check=='n') 
			mid=this.binarySearch(left,mid-1);	
	}
	return mid;
},
temperaturConversion(temperature, i) 
{
	var ctof,ftoc;
	if(i==1) 
	{  
	  ctof = (temperature * 9/5) + 32;
	  console.log("Converting temperature from celsius to fahreinheit:" +ctof);
	}
	if(i==2) 
	{
	   ftoc = (temperature - 32) * 5/9;
	   console.log("Converting temperature from fahreinheit to celsius:" +ftoc);
	}
},

/**
 * 
 * @param {String} first 
 * @param {String} second 
 */
anagram(first,second){
	first = this.insertionSort(first.split(''));
	console.log(first);
	second = this.insertionSort(second.split(''));
	console.log(second);
	if(first.length==second.length)
	{
		for(let index = 0;index<first.length;index++)
		{
			if(first[index]!=second[index])
				return false;
		}
		return true;
	}
	return false;
},
anagramArr(arr)
{
	var values = [];
	for(let index=0;index<arr.length-1;index++)
	{

	}
}

}