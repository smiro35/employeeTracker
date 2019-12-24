const con = require("./connections.js");
const inq = require('inquirer');



function viewTables() {

    con.query("SELECT * FROM Department", function(err, res) {
        if (err) throw err;
        console.log("working");
        console.log(res);

        // con.end();
    });
}

// viewTables();

function updateTables() {
    console.log("Updating all Departments");
    var query = con.query("UPDATE Department SET ? WHERE ?", [{
            name: "Shakur",
        }, {
            id: 1
        }],
        function(err, res) {
            if (err) throw err;
            console.log("Working");
            console.log(res);
            // con.end();


        });
}
// updateTables();


function addToTables() {
    console.log("Inserting to Tables");
    var query = con.query(
        "INSERT INTO Department SET ?", {
            name: "Shakur",

        },
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + "name added");
            // Call updateProduct AFTER the INSERT completes
            updateTables();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

// addToTables();

var answers;

function processAnswers(answers) {
    console.log("And your answers are:", answers);
    console.log(answers.Todo, );
    console.log(answers.Add, );
    console.log(answers.View, );
    console.log(answers.Update);


}

function validateName(name) {
    return name !== '';
}






var questions = [

    {
        message: "What would you like to do??",
        type: "list",
        name: "Todo",
        choices: ["Add", "View", "Update"],
        validate: validateName
    },



    {
        message: "On which table would you like to add??",
        type: "list",
        name: "Add",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },

    {
        message: "Which table would you like to view??",
        type: "list",
        name: "View",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },

    {
        message: "Which table would you like to update??",
        type: "list",
        name: "Update",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },




];








inq.prompt(questions).then(processAnswers);