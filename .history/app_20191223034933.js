const con = require("./connections.js");
const inq = require('inquirer');
// const dbase = require('./dbase.js');
const questions = require('./questions.js');







inq.prompt(questions).then(processAnswers);