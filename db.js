var users = [
  {name: "tomi", email: "aadesina92@gmail.com", password: "qwerty1", id: 1},
  {name: "tolu", email: "tadesina90@gmail.com", password: "qwerty", id: 2},
  {name: "izu", email: "izukuzu@gmail.com", password: "izzyu", id: 3},
  {name: "ive", email: "iveotv@gmail.com", password: "ivesmile", id: 4}
];
var orders = [
  {
    date: 'Sat Apr 13 2019',
    time: '10:20:13 GMT+0100 (West Africa Standard Time)',
    id: 1,
    user_id: 2,
    products: [ 'jeans', 'polo' ] },
  {
    date: 'Sun Apr 14 2019',
    time: '05:44:23 GMT+0100 (West Africa Standard Time)',
    id: 2,
    user_id: 1,
    products: [ 'bag' ] }
]

module.exports = {
  users, orders
};