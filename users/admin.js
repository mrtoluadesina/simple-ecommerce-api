var db = require('../db');
var User = require('./user');

function Admin() {

}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.readAllUsers = function() {
  console.log('All the Users');
  console.log(db.users);
  return db.users;
}

Admin.prototype.deleteAUser = function(id) {
  console.log('Delete A user');
  var toDelete = Admin.prototype.readUserById(id)
  var who = db.users.indexOf(toDelete);
  db.users.splice(who,1);
  console.log(db.users);
  return 'User Deleted';
}

Admin.prototype.deleteAllUsers = function() {
  console.log('Delete All Users');
  db.users.length = 0;
  console.log(db.users);
  return 'All Users Deleted';
}

Admin.prototype.readAllOrders = function() {
  console.log('read all orders');
  console.log(db.orders);
  return db.orders;
}

module.exports = Admin;