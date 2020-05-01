// Import orm 
var orm = require("../config/orm.js");

var burger = {
    // Displays all burgers in the database
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    // Add a burger to the db.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Devours da burger
    updateOne: function(table, objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Delete da burger from the database
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
}
// Export burger.js
module.exports = burger;