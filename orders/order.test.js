var db = require('../db');
var order = require('./order');

test('Finding instance of the construct', function() {
  var od = new order();
  expect(od instanceof order).toBeTruthy();
});