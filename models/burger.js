// Import orm to create functions that will interact with the database
let orm = require("../config/orm.js");

// Object that will call orm functions using burger inputs
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(col, burger_name, cb) {
        orm.insertOne("burgers", col, burger_name, function(res) {
            cb(res);
        });
    },

    updateOne: function(col, devoured, id, cb) {
        orm.updateOne("burgers", col, devoured, id, function(res) {
            cb(res);
        });
    },

    deleteOne: function(id, cb) {
        orm.updateOne("burgers", id, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller - burgers_controller.js
module.exports = burger