/************************************************************
 * 
 * Purpose      :   Utility for Algorithm programs.
 * 
 * @description
 * 
 * @file        :   algoUtil.js
 * @overview    :   All the functionalities required for Algorithm programs are coded here.
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
module.exports = {
	prime(range) {
		var primes = [];
		primes[0] = 2;
		var primenos = 1;
		var n = 2;
		for (var i = 2; i < range; i++) {
			n++;
			for (var j = primenos - 1; j >= 0; j--) {
				if (n % primes[j] == 0)
					break;
				if (primes[j] == 2) {
					primes[primenos] = n;
					primenos++;
					break;
				}
			}
		}
		for (var i = 0; i < primenos; i++) {
			console.log(primes[i]);
		}
		return primes;
	},

	/**
	 * @description	Create an array of given size.
	 * @param {number} num 
	 */
	createArray(num) {
		var arr = [];
		for (let index = 0; index < num; index++)
			arr[index] = readline.question("Enter the element");
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

	createNumberArray(num) {
		/**
		 * Array->arr variable to store the input values.  
		 */
		var arr = [];
		/**
		 * Traverse from index->0 to range-> num
		 */
		for (let index = 0; index < num; index++)
			/**
			 * Reads only Integer and stores to its respective index of the Array.
			 */
			arr[index] = readline.questionInt("Enter the element");
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

	insertionSort(input) {
		/**
		 * Temporary variable to store values while swapping. 
		 */
		var temp;
		/**
		 * Choose element from Second to last element and 
		 * index1 holds the position of the traverse. 
		 */
		for (var index1 = 1; index1 < input.length; index1++) {
			/**
			 * index2 holds the current position of index1 and
			 * traverse till the first position.
			 */
			for (var index2 = index1; index2 > 0; index2--) {
				/**
				 * The element in position index2 is compared with the previous element,
				 * if the index2's element is less than its previous, the elements are swapped. 
				 */
				if (input[index2] < input[index2 - 1]) {
					temp = input[index2];
					input[index2] = input[index2 - 1];
					input[index2 - 1] = temp;
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
		for (var index1 = 0; index1 < input.length - 1; index1++) {
			/**
			 * Traverse till Array Length-index1-2 position to place the suitable element
			 * to the Array Length-index1-1 position.  
			 */
			for (var index2 = 0; index2 < (input.length - index1 - 1); index2++) {
				/**
				 * Swap if needed to get the greatest of two to right.
				 */
				if (input[index2] > input[index2 + 1]) {
					temp = input[index2];
					input[index2] = input[index2 + 1];
					input[index2 + 1] = temp;
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

	binarySearch(left, right) {
		/**
		 * Calculate the middle value of the range from left to right.
		 */
		var mid = Math.floor(left + (right - left) / 2);
		/**
		 * to recursively execute till the range reaches to single element.
		 */
		if (left < right) {
			/**
			 * check variable to store the response of the user.
			 */
			var check;
			/**
			 * If the range contains only two elements ask if the answer is first element,
			 * based on check return the answer.
			 */
			if (left == right - 1) {
				check = readline.question("Is the number " + left + "If yes press -> y, If no press ->n");
				if (check == 'y')
					return left;
				if (check == 'n')
					return right;
			}
			/**
			 * Ask if the user element is in the range of second half part and 
			 * recursively call that perticular range based on the answer returned by user to check.
			 */
			check = readline.question("Is the number in the range" + mid + "-" + right + "If yes press -> y, If no press ->n");
			if (check == 'y')
				mid = this.binarySearch(mid, right);
			if (check == 'n')
				mid = this.binarySearch(left, mid - 1);
		}
		/**
		 * If recursive call comes to a stage of single element,
		 * then return that element as an answer.
		 */
		return mid;
	},

	temperaturConversion(temperature, i) {
		var ctof, ftoc;
		if (i == 1) {
			ctof = (temperature * 9 / 5) + 32;
			console.log("Converting temperature from celsius to fahreinheit:" + ctof);
		}
		if (i == 2) {
			ftoc = (temperature - 32) * 5 / 9;
			console.log("Converting temperature from fahreinheit to celsius:" + ftoc);
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

	anagram(first, second) {
		/**
		 * Split the String and sent the splited Array for Sorting,
		 * store the Sorted Array in variable . 
		 */
		var f = first + "";
		var s = second + "";
		first = this.insertionSort(f.split(''));
		second = this.insertionSort(s.split(''));
		/**
		 * Proceed only if the length of both the Strings are same .
		 */
		if (first.length == second.length) {
			/**
			 * Check if both the Array have same content at respective indexes,
			 * if any one of the index does satisty the above, returns false.
			 */
			for (let index = 0; index < first.length; index++) {
				if (first[index] != second[index])
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
	anagramArr(arr) {
		var values = [];
		for (let index = 0; index < arr.length - 1; index++) {

		}
	},
	/**
	 * @description	To calculate the interest amount.
	 * 
	 * @param {number} principle 
	 * @param {number} year 
	 * @param {number} rate 
	 * 
	 * @returns	monthly payment.
	 */
	monthlyPayment(principle, year, rate) {
		var R = rate / (12 * 100);
		var n = 12 * year;
		var rs = Math.pow((1 + R), (-n));
		var calculation = (principle * R) / (1 - (rs));
		console.log("The monthly payment " + calculation);
	},
	/**
	 * @description	To calculate the Sq.root of a number.
	 * 
	 * @param {number} num
	 * 
	 * @returns	Sq.root of a number. 
	 */
	sqrt(num) {
		if (num > 0) {
			//formula 
			var t = num;
			var epsilon = 1e-15;
			while (Math.abs(t - num / t) > epsilon * t) {
				t = (num / t + t) / 2;
			}
			console.log("Squre root of non negative number is : ", t)
		}
		else {
			console.log("Number should be positive ");
		}
	},
	/**
	 * @description	To calculate the minimum number of notes possible for given amount.
	 * 
	 * @param {number} amount 
	 * @param {number} i 
	 * @param {number} notes 
	 */
	vendingMachine(amount, i, notes) {
		var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
		if (amount == 0 && i == arr.length) {
			console.log("Total number of notes ", notes);
			return;
		}
		if (Math.floor(amount / arr[i]) > 0) {
			console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
			notes = notes + Math.floor(amount / arr[i]);
			amount = amount % arr[i];
			this.vendingMachine(amount, i + 1, notes);
			return;
		}
		this.vendingMachine(amount, i + 1, notes);
	},

	/**
	 * @description	To split the array till it is divided into single element.
	 * 
	 * @param {Array} res.
	 */
	mergeSort(res) {
		var n = res.length;
		if (n < 2) {
			return;
		}
		var mid = Math.floor(n / 2);
		var left = [mid];
		var right = [n - mid];
		for (let i = 0; i < mid; i++) {
			left[i] = res[i];
		}
		for (let j = mid; j < n; j++) {
			right[j - mid] = res[j];
		}
		this.mergeSort(left);
		this.mergeSort(right);
		this.merge(left, right, res);

	},
	/**
	 * @description	Combine two array in order and store in third array.
	 * 
	 * @param {Array} arr 
	 * @param {Array} brr 
	 * @param {Array} crr
	 * 
	 * @returns Sorted Array. 
	 */
	merge(arr, brr, crr) {
		var i = 0; var j = 0;
		var k = 0;
		while (i < arr.length && j < brr.length) {
			if (arr[i] <= brr[j]) {
				crr[k] = arr[i]
				i++;
			}
			else {
				crr[k] = brr[j];
				j++;
			}
			k++;
		}
		while (i < arr.length) {
			crr[k] = arr[i];
			i++;
			k++;
		}
		while (j < brr.length) {
			crr[k] = brr[j];
			j++;
			k++;
		}
		return crr;
	},
	/**
	 * @description To determine the day of the particular date.
	 * 
	 * @param {number} day 
	 * @param {number} month 
	 * @param {number} year
	 * 
	 * @returns	number according to the day 0 as sun and so on. 
	 */
	dayOfWeek(day, month, year) {
		var y0 = year - Math.floor((14 - month) / 12);
		var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
		m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
		var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
		return d0;
	},
}