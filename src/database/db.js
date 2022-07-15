"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const db = mysql.createPool({
    connectionLimit: 5,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test",
});
db.getConnection((err) => {
    !err ? console.log('Connected to database') : console.log("Couldn't connect to db");
});
exports.default = db;
