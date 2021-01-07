// Import mysql connection
const connection = require("./connection");


// Object for all SQL statement functions
let orm = {
    selectAll: function(table, cb){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    
    insertOne: function(table, col, burger_name, cb){
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, burger_name], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, col, devoured, id, cb){
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, col, devoured, id], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }

};

// Export orm for our model - burger.js
module.export = orm;