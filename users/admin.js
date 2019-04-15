var db = require('../db');
var User = require('./user');
var order = require('../orders/order')

function Admin(name, email, password) {
  User.call(this, name, email, password);
  this.admin = true;
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

Admin.prototype.getAllOrders = function() {
  console.log(order.prototype.readAllOrders());
  return order.prototype.readAllOrders();
}

Admin.prototype.getOrderById = function(id) {
  console.log('read one order by Id');
  return order.prototype.readOrderById();
}

Admin.prototype.updateOrder = function() {
  console.log('update an order');
  console.log(Array.prototype.slice.call(arguments));
  var updated = Array.prototype.slice.call(arguments);
  return order.prototype.editOrderDetails(updated);
}

Admin.prototype.deleteAnOrder = function() {
  console.log('delete one order');
  return order.prototype.deleteAnOrder();
}

Admin.prototype.deleteAllOrders = function() {
  return order.prototype.deleteAllOrders();
}
 
module.exports = Admin;