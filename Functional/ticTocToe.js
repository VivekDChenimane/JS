/************************************************************
 * Execution    :   1. cmd> node ticTocToe.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon ticTocToe.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To play TicTocToe game with user by computer choosing random values.
 * 
 * @description
 * 
 * @file        :   ticTocToe.js
 * @overview    :   Checks two String if they are simply a rearrangement of each other.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   08-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../Utility/utility');
function ticTocToe() {
	var flag = false;
	/**
	 * Initialize the game as all the rows and columns as -.
	 */
	var arr = util.intializeGame();
	console.log("Let computer be player 1(O)_and you be the player 2(X)");
	console.log("Ready for the game:-)");
	var count = 1;
	/**
	 * Only 9 plays can be played in the game.
	 */
	while (count <= 9) {
		/**
		 * Computer choose the point and mark it as O and returns the array.
		 */
		arr = util.computerPlayer(arr);
		count++;
		/**
		 * Check if Computer won after this play.
		 */
		flag = util.check(arr);
		if (flag) {
			console.log("Computer is the winner");
			break;
		}
		/**
		 * If player not won after 9th play then it's a draw.
		 */
		else if (count == 9) {
			console.log("Oh oo, The match is draw");
			break;
		}
		/**
		 * Player choose the point and mark it as O and returns the array.
		 */
		arr = util.userPlayer(arr);
		/**
		 * Check if Player won after this play.
		 */
		flag = util.check(arr);
		if (flag) {
			console.log("Congratulations You are the winner");
			break;
		}
		count++;
	}
	console.log("Game end");
}
ticTocToe();