# Simple-ecommerce-api
Simulating a simple e-commerce platform, we will have a user, an admin (this object will inherit from the user), and an order object (the order object holds all methods for object but it is invoked by a user or an admin).

## User Object
- Create a new user
- Read a single user by his ID
- Read all users  (*)
- Update the details of a user
- Delete a user (*)
- Delete all users (*)
- Search for a user by his name and return false if the user is not found but returns the user object if the user is found.

Then to simulate the simple e-commerce platform where a user can make an order.

## Order Object
- Create a new order
- Read all the orders(*)
- Read one order by its ID(*)
- Update order details(*)
- Delete one order(*)
- Delete all orders(*)


### User object contains the following properties
- Name
- Email
- Password
- Id (Auto increment)

### Order object contains the following properties
- user_id
- timeOfOrder
- dateOfOrder
- Id (Auto increment)
- Products in the order

```
npm init

npm install --save-dev jest

// change the value of test in scripts to jest in your package.json

{
  "scripts": {
    "test": "jest"
  }
}

// to test the code 

npm run test

```
