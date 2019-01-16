/************************************************************
 * Execution    :   1. cmd> node BalancedParentheses.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon BalancedParentheses.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To generate the unique coupon numbers.
 * 
 * @description
 * 
 * @file        :   BalancedParentheses.js
 * @overview    :   Use random numbers to generate coupon numbers.
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
const stack = require('../Utility/Stack.js');
function Stack()
{
    var st= new stack.Stack;
    var str=readline.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   
   for(i=0;i<str.length;i++)
   { ch=str.charAt(i);
    
       if(ch=='(' || ch=='[' || ch=='{')
       {
       st.push(ch);

       }
       else{
           switch (ch)
           {
               case ')' : if(st.pop()!='('){
                                return false;
                            }
                            break;
               case ']' : if(st.pop()!='[')
               {
                   return false;
               }
               break;
               case '}' : if(st.pop()!='{')
               {
                   return false;
               }break;
           }
       }


   }
   if(st.getsize()==0){
   return true;
   }
   return false;
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
}