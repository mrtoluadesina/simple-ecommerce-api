var db = require('../db');
var user = require('./user');
var admin = require('./admin');
var me = new user();
var ad = new admin();

test('me to be instance of User construct', function() {
  expect(me instanceof user).toBe(true);
})

test('Creating a new user', function() {
  var length = db.length;
  expect(me.createUser('tolu', 'tadesina90@gmail.com', 'qwerty')).toMatch('User Created');
  expect(ad.createUser('ive', 'iveotv@gmail.com', 'wretysfdr')).toMatch('User ');
  expect(db.length).toBe(length + 2);
});

test('Read User By Id', function() {
  expect(me.readUserById(1)).toEqual({name: "tomi", email: "aadesina92@gmail.com", password: "qwerty1", id: 1});
});

test('Search Db for name - tolu', function() {
  expect(me.search('tolu')).toEqual(expect.objectContaining({'name' : 'tolu'}));
});

test('Read All Users', function() {
  var allUsers = db;
  expect(ad.readAllUsers()).toBe(allUsers)
});

test('Searching for a user by name', function() {
  expect(me.search('ive')).toEqual(expect.objectContaining({'name' : 'ive'}));
});

test('Updating a user record', function() {
  expect(me.update('izu Ogbodo', 'izuking@gmail.com', 'izykinging', 3)).toEqual({name: 'izu Ogbodo', email: 'izuking@gmail.com', password: 'izykinging', id: 3});
});

test('Delete a User', function() {
  var length = db.length;
  expect(ad.deleteAUser(2)).toMatch('User Deleted');
  expect(db.length).toBe(length - 1);
});