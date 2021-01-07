// Import orm to create functions that will interact with the database
let orm = require("../config/orm.js");

// Object that will call orm methods using burger inputs
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

}

// Export the database functions for the controller - burgers_controller.js
module.exports = burger