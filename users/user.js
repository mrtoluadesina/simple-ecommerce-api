var users = require('../db');

function User() {
  
}
User.prototype.createUser = function(name, email, password) {
  console.log('User created');
  users.push({
    name : this.name,
    email: this.email,
    password: this.email,
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1
  });
  return 'User Created';
}
User.prototype.readUserById = function(id) {
  console.log(id);
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      console.log(users[i]);
      return users[i];
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
  for (var i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      console.log(users[i]);
      return users[i];
    }
  }
}

module.exports = User;