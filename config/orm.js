// Import mysql connection
const connection = require("./connection");

// Object for all SQL statement functions
let orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM ??", [table], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    
    insertOne: function(table, col, burger_name, cb){
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, burger_name], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, col, id, cb){
        connection.query("UPDATE ?? SET ?? = 1 WHERE id = ?", [table, col, id], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function(table, id, cb){
        connection.query("DELETE FROM ?? WHERE id = ?", [table, id], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export orm for our model - burger.js
module.export = orm;