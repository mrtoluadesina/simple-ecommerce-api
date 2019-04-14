var db = require('../db');
var order = require('../orders/order')

function User(id) {
  this.id = db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1;
}
User.prototype.createUser = function(name, email, password) {
  var create = new User;
  create.name = name;
  create.email = email;
  create.password = password;
  console.log('User created');
  db.users.push(create);
  return 'User Created';
}
User.prototype.readUserById = function(id) {
  console.log(id);
  for (var i = 0; i < db.users.length; i++) {
    if (db.users[i].id === id) {
      console.log(db.users[i]);
      return db.users[i];
    }
  }
}
User.prototype.update = function(name, email, password, id) {
  console.log('Updating user information');
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = id;
  console.log(this);
  return this;
}
User.prototype.search = function(name) {
  console.log(name);
  var found = [];
  for (var i = 0; i < db.users.length; i++) {
    if (db.users[i].name === name) {
      found.push(db.users[i]);
    }
  }
  if (found.length > 0) { 
    return found 
  } return false;
}
User.prototype.placeOrder = function() {
  if (arguments.length === 0) {
      return 'Invalid Order';
  }
  var myOrder = order.prototype.createOrder();
  myOrder.user_id = this.id;
  myOrder.products = Array.prototype.slice.call(arguments);
  db.orders.push(myOrder);
  console.log(myOrder);
  return myOrder;
}

module.exports = User;