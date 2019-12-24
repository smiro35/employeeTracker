const mysql = require('mysql');
const inq = require('inquirer');
const express = require('express');


const app = express();

const PORT = process.env.PORT || 8081;



// A query which returns all data needed
// app.get("/api/songs/artist", (req, res) => {

// console.log(req.query);

// const artist = req.query.q;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "empTrac_DB",
    database: "Vip2004."


});

connection.connect((err) => {
    if (err) {

        res.status(500);
        return res.send("There was an error connecting to the database.")
    }

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
})


// })