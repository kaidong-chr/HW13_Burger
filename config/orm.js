// Import mysql connection
const connection = require("./connection");

// Object for all SQL statement functions
let orm = {
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table}`, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    
    insertOne: function(table, burger_name, val, cb) {
        connection.query(`INSERT INTO ${table} (${burger_name}) VALUES ("${val}")`, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, devoured, id, cb) {
        connection.query(`UPDATE ${table} SET ${devoured} = 1 WHERE id = ${id}`, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function(table, id, cb) {
        connection.query(`DELETE FROM ${table} WHERE id = ${id}`, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export orm for our model - burger.js
module.exports = orm;