const utility = require('../Utility/utility');
const readline = require('readline-sync');
var Regex = () => {
    try {
        var name = readline.question("Enter your name ");
        name = utility.validateString(name);
        var fullname = readline.question("Enter your full name ");
        fullname = utility.validateString(fullname);
        var mobileNo = readline.questionInt("Enter your Mobile number ");
        if (mobileNo.length < 10 || 10 < mobileNo.length) throw "Please enter valid phone number. ";
        console.log();
        console.log("------------------------------------------------------");
        console.log();
        utility.regex(name, fullname, mobileNo)
    } catch (error) {
        console.log(error);
    }
}
Regex();