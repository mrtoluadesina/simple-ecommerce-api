var db = require('../db');

function User() {
  
}
User.prototype.createUser = function(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = db.length > 0 ? db[db.length - 1].id + 1 : 1;
  console.log('User created');
  db.push(this);
  return 'User Created';
}
User.prototype.readUserById = function(id) {
  console.log(id);
  for (var i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      console.log(db[i]);
      return db[i];
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
  for (var i = 0; i < db.length; i++) {
    if (db[i].name === name) {
      found.push(db[i]);
    }
  }
  if (found.length > 0) { 
    return found 
  } return false;
}

module.exports = User;