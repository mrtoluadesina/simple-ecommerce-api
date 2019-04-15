var db = require('../db');

function Order() {
  var date = new Date();

  this.date = date.toDateString();
  this.time = date.toTimeString();
  this.id = db.orders.length > 0 ? db.orders[db.orders.length - 1].id + 1 : 1
}
Order.prototype.createOrder = function() {
  return new Order;
}
Order.prototype.readAllOrders = function() {
  console.log('reading all orders ....');
  console.log(db.orders);
  return db.orders;
}
Order.prototype.readOrderById = function(id) {
  console.log('reading ...');
  for (var i = 0; i < db.orders.length; i++) {
    if (db.orders[i].id === id)
      console.log(db.orders[i]);
      return db.orders[i];
  }
}
Order.prototype.editOrderDetails = function() {
  console.log('updating ... ');
  var order = Order.prototype.readOrderById(this.id);
  console.log(order);
  order.products = arguments[0];
  console.log(order.products);
  return 'Order Edited';
}
Order.prototype.deleteAnOrder = function(id) {
  console.log('Delete one order!');
  var toDelete = Order.prototype.readOrderById(id);
  var what = db.orders.indexOf(toDelete);
  db.orders.splice(what, 1);
  console.log(db.orders);
  return 'Order Deleted';
}
Order.prototype.deleteAllOrders = function() {
  console.log('Delete All Orders !');
  db.orders.length = 0;
  console.log(db.orders);
  return db.orders;
}
module.exports = Order;