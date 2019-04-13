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

module.exports = Order;