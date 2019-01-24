var util = require('../Utility/utility');
var data = util.readFromFile('../jsonFiles/company.json');
data = JSON.parse(data);
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        console.log(element);
    }
}
console.log(data);