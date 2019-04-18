var db = require('../db');
var order = require('./order');

test('Finding instance of the construct', function() {
  var od = new order();
  expect(od instanceof order).toBeTruthy();
});

test('Read all orders', function() {
  var od = new order();
  expect(od.readAllOrders()).toBe(db.orders);
});

test('Delete All Orders', function() {
  var od = new order();
  expect(od.deleteAllOrders()).toBeTruthy();
  expect(db.orders.length).toBe(0);
});