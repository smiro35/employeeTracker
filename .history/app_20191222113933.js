var connection = require("./connections.js");













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