var con = require("./connections.js");
const inq = require('inquirer');



// function processAnswers(answers) {
//     console.log("And your answers are:", answers);


// }

// function validateName(name) {
//     return name !== '';
// }

// var questions = [

//     {
//         message: "What would you like to do??",
//         type: "list",
//         name: "Todo",
//         choices: ["Add", "View", "Update"],
//         validate: validateName
//     },
//     // choices: ["Department", "role", "Employee"]


//     {
//         message: "On which table would you like to add??",
//         type: "list",
//         name: "Add",
//         choices: ["Department", "role", "Employee"],
//         validate: validateName
//     },

//     {
//         message: "Which table would you like to view??",
//         type: "list",
//         name: "View",
//         choices: ["Department", "role", "Employee"],
//         validate: validateName
//     },

//     {
//         message: "Which table would you like to update??",
//         type: "list",
//         name: "Update",
//         choices: ["Department", "role", "Employee"],
//         validate: validateName
//     },




// ];
// inq.prompt(questions).then(processAnswers);





// adding to tables

// var DeptPlus = "INSERT INTO Department ?? VALUES ??";
// con.query(DeptPlus, function(err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });
function viewTables() {
    // console.log("Selecting all products...\n");
    con.query("SELECT * FROM Department", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log("working");
        // con.end();
    });
}

viewTables();

// update tblValued() set name = 'ajay sharma'
// where id = 1
// Go



function updateTables() {
    console.log("Updating all Departments");
    var query = con.query("UPDATE Department SET ? WHERE ?", [{
            name: "Shakur",
        }, {
            id: 1
        }],
        function(err, res) {
            if (err) throw err;
            console.log("Updating");
            con.end();


        });
}
updateTables();































































// A query which returns all data needed
// app.get("/api/songs/artist", (req, res) => {

// console.log(req.query);

// const artist = req.query.q;
// / })


// connection.query(
//     "SELECT * FROM ----db.mysongz where artisit =?;", [artist],
//     (err, response) => {
//         if (err) {
//             console.log(err);

//             res.status(500);
//             return res.send("There was an error querying the database.")
//         }

//         res.json(response);

//         connection.end();

//     }



// );