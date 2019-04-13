var db = require('../db');

function User() {
  
}
User.prototype.createUser = function(name, email, password) {
  console.log('User created');
  db.push({
    name,
    email,
    password,
    id: db.length > 0 ? db[db.length - 1].id + 1 : 1
  });
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
  var person = User.prototype.readUserById(id);
  person.name = name;
  person.email = email;
  person.password = password;
  console.log(person);
  return person;
}
User.prototype.search = function(name) {
  console.log(name);
  for (var i = 0; i < db.length; i++) {
    if (db[i].name === name) {
      console.log(db[i]);
      return db[i];
    }
  }
}

module.exports = User;