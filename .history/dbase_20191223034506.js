var con = require("./connections.js");

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

module.exports = dbase;