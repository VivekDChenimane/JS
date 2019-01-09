const readline = require('readline-sync');
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