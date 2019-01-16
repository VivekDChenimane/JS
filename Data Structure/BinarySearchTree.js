var readline = require('readline-sync');
module.exports = {
    binarySearchTree() {
        var number = readline.question("Enter the total number of test cases");
        var arr = [];
        console.log("Enter your integers");
        for (var i = 0; i < number; i++) {
            arr[i] = readline.questionInt();
        }
        console.log(arr);
         var first,second;
        for (var j = 0; j < arr.length; j++) {
            console.log(this.factorial(100));
            console.log(this.factorial(200));
            var first =  (this.factorial(2*Number(arr[j])));
            var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
             var result = Math.floor((first / second));
             console.log("The total number of Node required for "+arr[j]+" is "+result);
       }
       

    },
    factorial(num) {
        if(num>0)
        {
        if (num == 0 || num == 1) {
            return 1;
        }
        return num*this.factorial(num-1);
    }
    }
}