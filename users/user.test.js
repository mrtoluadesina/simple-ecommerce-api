var db = require('../db');
var user = require('./user');
var admin = require('./admin');
var order = require('../orders/order')

test('me to be instance of User construct', function() {
  var me = new user();
  expect(me instanceof user).toBe(true);
});

test('Id AutoIncrement function', function(){
  var ad = new admin();
  var length = db.users.length;
  expect(ad.createUser('Esther', 'sheyi@gmail.com', 'gumlove')).toMatch('User ');
});

test('Creating a new user', function() {
  var me = new user();
  var ad = new admin();
  var length = db.users.length;
  expect(me.createUser('badru', 'badru40@gmail.com', 'qwerty')).toMatch('User Created');
  expect(ad.createUser('bella', 'bellarosetv@gmail.com', 'wretysfdr')).toMatch('User ');
  expect(db.users.length).toBe(length + 2);
});

test('Read User By Id', function() {
  var me = new user();
  expect(me.readUserById(1)).toEqual({name: "tomi", email: "aadesina92@gmail.com", password: "qwerty1", id: 1});
});

test('Search db for name - tolu', function() {
  var me = new user();
  expect(me.search('tolu')).toEqual(expect.arrayContaining([expect.objectContaining({'name' : 'tolu'})]));
});

test('Read All Users', function() {
  var ad = new admin();
  var allUsers = db.users;
  expect(ad.readAllUsers()).toBe(allUsers)
});

test('Searching for a user by name', function() {
  var me = new user();
  expect(me.search('ive')).toEqual(expect.arrayContaining([expect.objectContaining({'name' : 'ive'})]));
  expect(me.search('ochuko')).toBeFalsy();
});

test('Updating a user record', function() {
  var me = new user();
  expect(me.update('izu Ogbodo', 'izuking@gmail.com', 'izykinging', 3)).toEqual({name: 'izu Ogbodo', email: 'izuking@gmail.com', password: 'izykinging', id: 3});
});

test('Delete a User', function() {
  var ad = new admin();
  var length = db.users.length;
  expect(ad.deleteAUser(2)).toMatch('User Deleted');
  expect(db.users.length).toBe(length - 1);
});

test('Delete All Users', function() {
  var ad = new admin();
  ad.createUser('ekressa', 'ekey@est.her', 'decagon');
  console.log(db.users);
  expect(ad.deleteAllUsers()).toEqual(expect.arrayContaining([]));
})

test('Creating a new order', function() {
  var tunde = new user();
  tunde.createUser('tunde', 'tambo@gmail.com', 'dfgfjkd');
  var bayo = new user();
  bayo.createUser('bayo', 'tambo@gmail.com', 'dfgfjkd');
  expect(tunde.placeOrder(['jeans']) instanceof order).toBeTruthy();
  expect(bayo.placeOrder()).toMatch('Invalid');
  expect(bayo.placeOrder(['tshirts', 'sneakers']).user_id).toBe(bayo.id);
  expect(tunde.placeOrder(['tshirts', 'sneakers']).user_id).toBe(tunde.id);
  console.log(db.users)
  console.log(db.orders)
});

test('Read All Orders', function() {
  var ad = new admin();
  var allOrders = db.orders;
  expect(ad.getAllOrders()).toBe(allOrders);
});

test('Read one Order by it Id', function() {
  var ad = new admin();
  expect(ad.getOrderById(1)).toEqual({
    date: 'Sat Apr 13 2019',
    time: '10:20:13 GMT+0100 (West Africa Standard Time)',
    id: 1,
    user_id: 2,
    products: [ 'jeans', 'polo' ] });
});

test('Delete all Orders', function() {
  var ad = new admin();
  expect(ad.deleteAllOrders()).toBeTruthy();
});

test('Delete one Order', function() {
  var ad = new admin();
  expect(ad.deleteAnOrder(1)).toMatch('Order D');
});

test('Updating Order Details', function() {
  var ad = new admin();
  var order = ad.placeOrder(['bags', 'shoes'])
  var orderId = order.id;
  console.log(db.orders);
  expect(ad.updateOrder(orderId, ['polos', 'tables'])).toMatch('Order ');
  console.log(db.orders);
});
