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
const util = require('../Utility/Utility');
function ticTocToe(){
    var flag = false;
    var arr = util.intializeGame();
    console.log("Let computer be player 1(O)_and you be the player 2(X)");
    console.log("Ready for the game:-)");
    var count = 1;
    while(count<=9) 
    {
	    arr = util.computerPlayer(arr);
	    count++;
	    flag = util.check(arr);
	    if(flag)
	    {
    	    console.log("Computer is the winner");
	        break;
	    }
	    else if(count==9)
	    {
		    console.log("Oh oo, The match is draw");	
		    break;
    	}
	    arr = util.userPlayer(arr);
	    flag = util.check(arr);
	    if(flag)
	    {
	        console.log("Congratulations You are the winner");
		    break;
    	}
	    count++;
		}
        console.log("Game end");
}
ticTocToe();