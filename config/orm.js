// Import mysql connection
const connection = require("./connection");

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

}