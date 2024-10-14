const Product = require("../models/Product");

const products = [
  new Product(
    1,
    "Laptop",
    "15-inch laptop with 16GB RAM",
    "Electronics",
    1200.0,
    101,
    false
  ),
  new Product(
    2,
    "Smartphone",
    "Latest model smartphone with 128GB storage",
    "Electronics",
    800.0,
    102,
    false
  ),
  new Product(
    3,
    "Coffee Maker",
    "Automatic coffee maker with grinder",
    "Home Appliances",
    150.0,
    103,
    false
  ),
  new Product(
    4,
    "Desk Chair",
    "Ergonomic desk chair",
    "Furniture",
    200.0,
    104,
    false
  ),
  new Product(
    5,
    "Bluetooth Headphones",
    "Noise-cancelling Bluetooth headphones",
    "Electronics",
    300.0,
    101,
    false
  ),
  new Product(
    6,
    "Air Fryer",
    "Digital air fryer with multiple settings",
    "Home Appliances",
    120.0,
    103,
    false
  ),
  new Product(
    7,
    "Wireless Mouse",
    "Ergonomic wireless mouse",
    "Electronics",
    25.0,
    102,
    false
  ),
  new Product(
    8,
    "Office Desk",
    "Spacious office desk",
    "Furniture",
    400.0,
    104,
    false
  ),
  new Product(
    9,
    "External Hard Drive",
    "1TB external hard drive",
    "Electronics",
    100.0,
    101,
    false
  ),
  new Product(
    10,
    "Instant Pot",
    "Multi-functional pressure cooker",
    "Home Appliances",
    80.0,
    103,
    false
  ),
];

module.exports = products;
