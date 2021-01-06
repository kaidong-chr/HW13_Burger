// Import mysql connection
const connection = require("./connection");

let orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

}