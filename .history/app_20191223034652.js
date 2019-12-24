const con = require("./connections.js");
const inq = require('inquirer');
// const dbase = require('./dbase.js');
const questions = require('./questions.js');




function processAnswers(answers) {
    console.log("And your answers are:", answers);


}

// function validateName(name) {
//     return name !== '';
// }


inq.prompt(questions).then(processAnswers);