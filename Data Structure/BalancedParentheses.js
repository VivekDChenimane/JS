/************************************************************
 * Execution    :   1. cmd> node BalancedParentheses.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon BalancedParentheses.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To check if the equation is balanced or not.
 * 
 * @description
 * 
 * @file        :   BalancedParentheses.js
 * @overview    :   To have equal number of pushs and pops of the parenthesis.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   10-01-2019
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
const stackutil = require('../Utility/Stack.js');
function Stack()
{
    /**create a stach object */
    var stack= new stackutil.Stack;
    var expression=readline.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   /**
    * check each letter, if it is a open parenthesis push into the stack.
    */
   for(i=0;i<expression.length;i++){
        ch=expression.charAt(i);
       if(ch=='(' || ch=='[' || ch=='{')
       {
        stack.push(ch);
       }
       /**check if its a closing parenthesis and pop if it is so. */
       else
           switch (ch)
           {
               /**
                * checks letter with below closing parenthesis if it matches,
                * pop the corresponding open parenthesis.
                */
               case ')' : if(stack.pop()!='(')
                                return false;
                            break;
               case ']' : if(stack.pop()!='[')
                                return false;
                            break;
               case '}' : if(stack.pop()!='{')
                                return false;
                            break;
           }
   }
   /**
    * If the size of the stack is 0 return true as it is balanced
    */
   if(stack.getsize()==0)
   return true;
   return false;
}
var check=Stack();
if(check)
    console.log("String is balanced");
else
    console.log("Not balanced");