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

Admin.prototype.deleteAUser = function() {
  console.log('Delete A user');
}

Admin.prototype.deleteAllUsers = function() {
  console.log('Delete All Users');
  db = [];
  console.log(db);
  return db;
}


module.exports = Admin;