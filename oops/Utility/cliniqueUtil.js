/************************************************************
 * 
 * Purpose      :   Utility for OOPS programs.
 * 
 * @description
 * 
 * @file        :   clinique.js
 * @overview    :   All the functionalities required for Algorithm programs are coded here.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   24-01-2019
 * 
 * **********************************************************/
var readline = require('readline-sync');
var fileSystem = require('fs');
var util = require('../Utility/utility');
/** 
 * @description Access the json object.
*/
var data = util.readFromFile('../jsonFiles/clinique.json');
var clinique = JSON.parse(data);
module.exports = {
    appointment() {
        console.log("Doctors Available List");
        console.log(clinique.Doctors);
        var Name = readline.question('Patient Name:');
        Name = util.validateString(Name);
        var ID = parseInt(Math.random() * 1000);
        var mobNo = readline.questionInt('Mobile Number:');
        util.validatePhno(mobNo);
        var Age = readline.questionInt('Age:');
        var Appointed_To = readline.question('whose appointment u want:');
        clinique.Patients.push(
            {
                "Name": Name,
                "ID": ID,
                "mobNo": mobNo,
                "Age": Age,
                "Appointed_To": Appointed_To
            })
        console.log("Appointment Added Successfully...");
        util.stringify('../jsonFiles/clinique1.json', clinique);
    },
    /**
     * @description To the the person detail from the database.
     */
    search() {
        console.log("****SEARCH LIST******");
        var choice = readline.questionInt('Enter Option:\n1.Doctor\n2.Patient');
        switch (choice) {
            case 1: {
                this.searchDoctor();
                break;
            }
            case 2: {
                this.searchPatient();
                break;
            }
            default: console.log("Enter correct value.");
        }
    },
    /**
     * @description To search the doctor deatils.
     */
    searchDoctor() {
        var choice = readline.questionInt('Enter option:\n1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability');
        switch (choice) {
            case 1: {
                var name = readline.question('Name: ');
                for (var key in clinique.Doctors) {
                    if (clinique.Doctors[key].Name == name) {
                        console.log("****Doctor Info****");
                        console.log(clinique.Doctors[key]);
                    }
                }
                break;
            }
            case 2: {
                var i = readline.questionInt('ID: ');
                /**
                 * find key in the doctor object we want to search
                 */
                for (var key in clinique.Doctors) {
                    if (clinique.Doctors[key].ID == i) {
                        console.log("****Doctor's Info****");
                        console.log(clinique.Doctors[key]);
                    }
                }
                break;
            }
            case 3: {
                var i = readline.question('Specialization: ');
                /**
                 * find key in the doctor object we want to search
                 */
                for (var key in clinique.Doctors) {
                    if (clinique.Doctors[key].Specialization == i) {
                        console.log("****Doctor's Info****");
                        console.log(clinique.Doctors[key]);
                    }
                }
                break;
            }
            case 4: {
                var i = readline.question('Availability: ');
                /**
                 * find key in the doctor object we want to search
                 */
                for (var key in clinique.Doctors) {
                    if (clinique.Doctors[key].Availability == i) {
                        console.log("****Doctor's Info****");
                        console.log(clinique.Doctors[key]);
                    }
                }
                break;
            }
            default : console.log("Enter correct option");
        }
    }
    ,
    /**
     * @description To search the patient details from database.
     */
    searchPatient() {
        var choice = readline.questionInt('Enter option:1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age ');
        switch (choice) {
            case 1: {
                var i = readline.question('Name: ');
                for (var key in clinique.Patients) {
                    if (clinique.Patients[key].Name == i) {
                        console.log("****Patients Info****");
                        console.log(clinique.Patients[key]);
                    }
                }
                break;
            }
            case 2: {
                var i = readline.question('ID: ');
                for (var key in clinique.Patients) {
                    if (clinique.Patients[key].ID == i) {
                        console.log("****Patients Info****");
                        console.log(clinique.Patients[key]);
                    }
                }
                break;
            }
            case 3: {
                var i = readline.question('mobNo: ');
                for (var key in clinique.Patients) {
                    if (clinique.Patients[key].mobNo == i) {
                        console.log("****Patients Info****");
                        console.log(clinique.Patients[key]);
                    }
                }
                break;
            }
            case 4: {
                var i = readline.question('Age: ');
                for (var key in clinique.Patients) {
                    if (clinique.Patients[key].Age == i) {
                        console.log("****Patients Info****");
                        console.log(clinique.Patients[key]);
                    }
                }
                break;
            }
            default:console.log("Enter correct option");
        }
    }
}