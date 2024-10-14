const Inventory = require("../models/Inventory");

const productsInventory = [
  new Inventory(1, 1, 25, 29, 50),
  new Inventory(2, 2, 132, 231, 50),
  new Inventory(3, 3, 75, 40, 0),
  new Inventory(4, 4, 120, 80, 0),
  new Inventory(5, 5, 80, 50, 0),
  new Inventory(6, 6, 45, 60, 25),
  new Inventory(7, 7, 110, 150, 0),
  new Inventory(8, 8, 30, 40, 15),
  new Inventory(9, 9, 150, 100, 0),
  new Inventory(10, 10, 80, 120, 30),
];

module.exports = productsInventory;
