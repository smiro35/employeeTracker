var con = require("./connections.js");
const inq = require('inquirer');



function processAnswers(answers) {
    console.log("And your answers are:", answers);
}
var questions = [{
    message: "What's your first name?",
    type: "list",
    name: "firstName",
    choices: ["Department", "role", "Employee"]
}];
inq.prompt(questions, processAnswers);
// viewTables("tables now");





// adding to tables

// var DeptPlus = "INSERT INTO Department ?? VALUES ??";
// con.query(DeptPlus, function(err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });

function viewTables() {
    // console.log("Selecting all products...\n");
    connection.query("SELECT * FROM empTrac_DB", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}





























































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