// Import orm to create functions that will interact with the database
const orm = require("../config/orm");

// Object that will call orm functions using burger inputs
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(burger_name, val, cb) {
        orm.insertOne("burgers", burger_name, val, function(res) {
            cb(res);
        });
    },

    updateOne: function(devoured, condition, boolean, cb) {
        orm.updateOne("burgers", devoured, condition, boolean, function(res) {
            cb(res);
        });
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller - burgers_controller.js
module.exports = burger;