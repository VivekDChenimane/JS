const util = require('../Utility/DataStructureUtil');
var prime = () => {
    var anaprime = [];
    var a = 0;
    var b = 100;
    for (let i = 0; i < 10; i++) {
        anaprime[i] = util.findAnaPrime(a, b);
        console.log(a + " - " + k + " ==> " + anaprime[i]);
        a = a + 100;
        b = b + 100
    }
}
prime();