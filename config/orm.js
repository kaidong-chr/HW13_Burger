// Import mysql connection
const { query } = require("express");
const connection = require("./connection");

// Object for all SQL statement functions
let orm = {
    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${table}`;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    },
    
    insertOne: function(table, burger_name, val, cb) {
        let queryString = `INSERT INTO ${table} (${burger_name}) VALUES ("${val}")`;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    },

    updateOne: function(table, devoured, boolean, condition, cb) {
        let queryString = `UPDATE ${table} SET ${devoured} = ${boolean} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb) {
        let queryString = `DELETE FROM ${table} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    }
};

// Export orm for our model - burger.js
module.exports = orm;