const mysql = require('mysql');
const inq = require('inquirer');
const express = require('express');


const app = express();

const PORT = process.env.PORT || 8082;





const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Vip2004.",
    database: "empTrac_DB"


});

connection.connect((err) => {
    if (err) throw err;

    console.log("listening on port 8082");



});

module.exports = connection;