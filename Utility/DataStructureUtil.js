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
const file = require('fs');
var algoutil = require('../Utility/AlgoUtil');
var readline = require('readline-sync');
var take = require('util');

module.exports = {
	/**
	 * @description	To Write to the file
	 * 
	 * @param {file address} filename 
	 * @param {String} data 
	 */
	writefile(filename, data) {
		file.writeFile(filename, data, (err) => {
			if (err) throw err;
		})
	}
	,
	/**
		 * @description	To Read from the file
		 * 
		 * @param {file address} filename 
		 * 
		 * @returns Read data in form of array.
		 */
	readfile(filename) {
		let data = file.readFileSync(filename, 'utf8');
		data = data.split(' ');
		return data;
	}
	,
	/**
	 * @description	Parse into Integer.
	 * 
	 * @param {Array} stringArr 
	 * 
	 * @returns Array in Integer.
	 */
	parse(stringArr) {
		let index1 = 0;
		for (let index = 0; index < stringArr.length; index++) {
			if (!isNaN(parseInt(stringArr[index])))
				stringArr[index1] = parseInt(stringArr[index]);
			index1++
		} return stringArr;
	}
	,
	/**
	 * @description	Sort the array of elements
	 * 
	 * @param {Array} input
	 * 
	 * @returns	Sorted array. 
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
	},
	/**
	 * Function to find the possibility of the tree.
	 */
	binarySearchTree() {
		var number = readline.question("Enter the total number of test cases");
		var arr = [];
		console.log("Enter your integers");
		for (var i = 0; i < number; i++) {
			arr[i] = readline.questionInt();
		}
		console.log(arr);
		var first, second;
		for (var j = 0; j < arr.length; j++) {
			var first = (this.factorial(2 * Number(arr[j])));
			var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
			var result = Math.floor((first / second));
			console.log("The total number of Node required for " + arr[j] + " is " + result);

		}
	},
	/**
	 * @description To find the factorial of a number.
	 * 
	 * @param {Number} num
	 * 
	 * @returns Factorial of the number. 
	 */
	factorial(num) {
		if (num > 0) {
			if (num == 0 || num == 1)
				return 1;
			return num * this.factorial(num - 1);
		}
	},
	/**
	 * @description	Finds the  prime in the range.
	 * 
	 * @param {number} initial 
	 * @param {number} final 
	 * 
	 * @returns Array of primes in the range.
	 */
	findPrime(initial, final) {
		var flag = 0, k = 0;
		var prime = [];

		for (var index1 = initial; index1 <= final; index1++) {
			for (var index2 = 2; index2 < index1; index2++) {
				if (index1 % index2 == 0) {
					flag = 0;
					break;
				}
				else {
					flag = 1;
				}
			}
			if (flag == 1) {
				prime[k++] = index1;
			}
		}
		return prime;
	},
	/**
	 * @description	To find the anagram of all the primes in the range.
	 * 
	 * @param {number} ii 
	 * @param {number} jj
	 * 
	 * @returns	Array which are prime and anagram in the range. 
	 */
	findAnaPrime(initial, final) {
		var primes = this.findPrime(initial, final);
		var n = primes.length;

		var anaPrimes = [];
		var h = 0;

		for (let index1 = 0; index1 < n - 1; index1++) {
			for (let index2 = index1 + 1; index2 < n - 1; index2++) {
				if (algoutil.anagram(primes[index1], primes[index2])) {
					anaPrimes[h++] = primes[index1];
					anaPrimes[h++] = primes[index2];
				}
			}
		}
		return anaPrimes;
	},
	/**
	 * @description	To print in the center of the calender
	 * 
	 * @param {printing word} name 
	 */
	printCenter(name) {
		for (var i = 0; i < (3 * 5); i++) {
			take.print(" ");
		}
		take.print(name);
		console.log();
	}
}