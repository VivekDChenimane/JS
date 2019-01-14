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

/**
 * @description	Reads the Interger elements from the console upto the param range,
 * 				and stores in the Array.
 *   
 * @param {Interger} num
 * 
 * @returns		Array of Integer entered by user. 
 */

 createNumberArray(num){
	 /**
	  * Array->arr variable to store the input values.  
	  */
	var arr=[];
	/**
	 * Traverse from index->0 to range-> num
	 */
	for(let index=0;index<num;index++)
		/**
		 * Reads only Integer and stores to its respective index of the Array.
		 */
		arr[index]=readline.questionInt("Enter the element");
	return arr;
},

/**
 * @description	Picks each element one by one from First element to Last,
 * 				and check with its previous element and place to the suitable position.
 * 
 * @param {Array} input 
 * 
 * @returns		Sorted Array.
 */

insertionSort(input){
	/**
	 * Temporary variable to store values while swapping.
	 */
	var temp;
	/**
	 * Choose element from Second to last element and 
	 * index1 holds the position of the traverse. 
	 */
    for (var index1=1; index1<input.length; index1++) {
		/**
		 * index2 holds the current position of index1 and
		 * traverse till the first position.
		 */
        for(var index2 = index1 ; index2 > 0 ; index2--){
			/**
			 * The element in position index2 is compared with the previous element,
			 * if the index2's element is less than its previous, the elements are swapped. 
			 */
            if(input[index2] < input[index2-1]){
                temp = input[index2];
                input[index2] = input[index2-1];
                input[index2-1] = temp;
            }
        }
	}
	/**
	 * Returns the Sorted Array.
	 */
    return input;
}
,
/**
 * @description	Traverse the Array to its length times,to get larger elements
 * 				placed to its suitable position for each traverse.
 * 
 * @param {Array} input
 * 
 * @returns		Sorted Array. 
 */
bubbleSort(input) {
	/**
	 * Temporary variable for swapping two elements
	 */
	var temp;
	/**
	 * Traverse the Array's length-1 times to place all the larger elements to its 
	 * respective position except smallest element.
	 */
	for(var index1 = 0;index1 < input.length-1;index1++)
	{
		/**
		 * Traverse till Array Length-index1-2 position to place the suitable element
		 * to the Array Length-index1-1 position.  
		 */
		for(var index2 = 0;index2 < (input.length-index1-1);index2++) 
		{
			/**
			 * Swap if needed to get the greatest of two to right.
			 */
			if(input[index2]>input[index2+1])
			{
			    temp = input[index2];
                input[index2] = input[index2+1];
                input[index2+1] = temp;
			}
		}
	}
	/**
	 * Returns the Sorted Array.
	 */
	return input;
},

/**
 * @description	Recursive function to shorten the Array,
 * 				till we get the last element as a answer.
 *  
 * @param {Integer} left 
 * @param {Integer} right
 * 
 * @returns	the answer based on the array of questions. 
 */

binarySearch(left,right) {
	/**
	 * Calculate the middle value of the range from left to right.
	 */
	var mid = Math.floor(left+(right-left)/2);
	/**
	 * to recursively execute till the range reaches to single element.
	 */
	if(left<right)
	{
		/**
		 * check variable to store the response of the user.
		 */
		var check;
		/**
		 * If the range contains only two elements ask if the answer is first element,
		 * based on check return the answer.
		 */
		if(left==right-1)
		{
			check = readline.question("Is the number "+left+"If yes press -> y, If no press ->n");	
			if(check=='y') 
				return left;
			if(check=='n') 
				return right;
		}
		/**
		 * Ask if the user element is in the range of second half part and 
		 * recursively call that perticular range based on the answer returned by user to check.
		 */
		check = readline.question("Is the number in the range"+mid+"-"+right+"If yes press -> y, If no press ->n");
		if(check=='y') 
			mid=this.binarySearch(mid,right);
		if(check=='n') 
			mid=this.binarySearch(left,mid-1);	
	}
	/**
	 * If recursive call comes to a stage of single element,
	 * then return that element as an answer.
	 */
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
 * @description	Checks two String if they are rearrangement of each other.
 * 
 * @param {String} first 
 * @param {String} second 
 * 
 * @returns Boolean value 1. true  -> if Strings are Anagram.
 * 						  2. false -> if Strings are not Anagram.  
 */

anagram(first,second){
	/**
	 * Split the String and sent the splited Array for Sorting,
	 * store the Sorted Array in variable . 
	 */
	first = this.insertionSort(first.split(''));
	second = this.insertionSort(second.split(''));
	/**
	 * Proceed only if the length of both the Strings are same .
	 */
	if(first.length==second.length)
	{
		/**
		 * Check if both the Array have same content at respective indexes,
		 * if any one of the index does satisty the above, returns false.
		 */
		for(let index = 0;index<first.length;index++)
		{
			if(first[index]!=second[index])
				return false;
		}
		/**
		 * Returns true if all the elements matches.
		 */
		return true;
	}
	/**
	 * Returns false if the  Array length  doesn't matches.
	 */
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