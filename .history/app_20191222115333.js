var con = require("./connections.js");






// adding to tables

var DeptPlus = "INSERT INTO Department ?? VALUES ??";
con.query(DeptPlus, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});






























































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