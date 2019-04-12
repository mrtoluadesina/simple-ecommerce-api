var db = require('../db');
var User = require('./user');

function Admin() {

}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.readAllUsers = function() {
  console.log('All the Users');
  console.log(db);
  return db;
}

module.exports = Admin;