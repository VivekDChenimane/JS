/************************************************************
 * 
 * Purpose      :   Utility for OOPS programs.
 * 
 * @description
 * 
 * @file        :   addressBook.js
 * @overview    :   All the functionalities required for Algorithm programs are coded here.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   24-01-2019
 * 
 * **********************************************************/
let readline = require('readline-sync');
let util = require('./utility')
let filestream = require('fs');
module.exports={address_book(data) {
    var answer = readline.question("  Press \n 1.To add Person \n 2. To update Person \n 3. To delete Person \n 4. To sort the file by Zip \n 5. To sort the file by name \n 6. To display \n 7. To exit ");
    switch (answer) {
        case '1': this.addPerson(data);
            break;
        case '2': this.update(data);
            break;
        case '3': this.deleted(data);
            break;
        case '4': this.sortingZip(data);
            break;
        case '5': this.sortingName(data);
            break;
        case '6': this.displ(data);
            break;
        case '7': console.log("  Thank you  ");
            break;
        default: console.log("------wrong input------ ");
            this.address_book(data);
    }

},
addPerson(data) {
    var firstname = readline.question(" Enter First name of person  ");
    firstname=util.validateString(firstname);
    var lastname = readline.question(" Enter Last name of person   ");
    lastname=util.validateString(lastname);
    var contact = readline.questionInt(" Enter contact number of person ");
    contact=util.validatePhno(contact);
    var address = readline.question(" Enter address of person ");
    address=util.validateString(address);
    var state = readline.question(" Enter state of person ");
    address=util.validateString(state);
    var zip = readline.questionInt(" Enter zip code of person ");

    data.person.push({
        First_name: firstname,
        Last_name: lastname,
        Contact: contact,
        Address: address,
        State: state,
        Zip: zip
    })
    filestream.writeFileSync('../jsonFiles/address.json', JSON.stringify(data));
    this.address_book(data);

},
displ(data) {
    console.log(data);
    this.address_book(data);
},

deleted(data) {
    var ans = readline.question("press \n1.choose name \n 2. choose contact number  ");
    if (ans == 1) {
        let res = readline.question("Enter first name of the person ")
        for (let i = 0; i < data.person.length; i++) {
            if (data.person[i].First_name == res) {
                var index = data.person.indexOf(data.person[i]);

                data.person.splice(index, 1);
            }
        }
        filestream.writeFileSync('../jsonFiles/address.json', JSON.stringify(data));
        this.address_book(data);
    }
    else if (ans == 2) {
        let res = readline.question("Enter the mobile number of the person")
        for (let i = 0; i < data.person.length; i++) {
            if (data.person[i].Contact == res) {
                var index = data.person.indexOf(data.person[i]);
                data.person.splice(index, 1);
            }
        }
        filestream.writeFileSync('../jsonFiles/address.json', JSON.stringify(data));
        this.address_book(data);
    }
},
sortingZip(data) {
    let refer = data.person;
    function sortbyzip(a, b) {
        return (a.Zip - b.Zip);
    }
    var result = refer.sort(sortbyzip);
    console.log(result);
    this.address_book(data);
},

sortingName(data) {
    let refer = data.person;
    function sortbyname(a, b) {
        if (a.First_name == b.First_name) {
            return 0;
        }
        else if (a.First_name > b.First_name) {
            return 1;
        }
        else if (a.First_name < b.First_name) {
            return -1;
        }
    }
    let res = refer.sort(sortbyname);
    console.log(res);
    this.address_book(data);
},
update(data) {
    let ans = readline.question("Enter the  name of the exsting person ");
   
    for (let i = 0; i < data.person.length; i++) {
        filestream.writeFileSync('../jsonFiles/address.json', JSON.stringify(data));
        if (data.person[i].First_name == ans || data.person[i].Contact == ans) {
            var que = readline.question("\nPress \n 1. To update First name \n 2. To update Last name \n 3. To update contact \n 4.To update state \n 5. To update Address \n 6. To update zip \n 7. To Exit  ");
            if (que == 1) {
                let res = readline.question("Enter the new  First name of person ");
                data.person[i].First_name = res;
                this.save(data);
            }
            else if (que == 2) {
                let res1 = readline.question("Enter the new Last name of the person  ");
                data.person[i].Last_name = res1;
                this.save(data);
            }
            else if (que == 3) {
                let res2 = readline.question("Enter the new contact number  ");
                data.person[i].Contact = res2;
                this.save(data);
            }
            else if (que == 4) {
                let res3 = readline.question("Enter the new state name ");
                data.person[i].State = res3;
                this.save(data);
            }
            else if (que == 5) {
                let res4 = readline.question(" Enter the new address ");
                data.person[i].Address = res4;
                this.save(data);;
            }
            else if (que == 6) {
                let res5 = readline.question("Enter the new zip ");
                data.person[i].Zip = res5;
                this.save(data);
            }
            else if (que == 7) {
                return;
            }


        }
    }
},
save(data) {
    filestream.writeFileSync('../jsonFiles/address.json', JSON.stringify(data));
    this.update(data);
}}