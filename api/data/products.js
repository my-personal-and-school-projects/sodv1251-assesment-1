const Product = require("../models/Product");
const products = [
  new Product(
    1,
    "Laptop",
    "15-inch laptop with 16GB RAM",
    "Electronics",
    1200.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    2,
    "Smartphone",
    "Latest model smartphone with 128GB storage",
    "Electronics",
    800.0,
    102,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    3,
    "Coffee Maker",
    "Automatic coffee maker with grinder",
    "Home Appliances",
    150.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    4,
    "Desk Chair",
    "Ergonomic desk chair",
    "Furniture",
    200.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    5,
    "Bluetooth Headphones",
    "Noise-cancelling Bluetooth headphones",
    "Electronics",
    300.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    6,
    "Air Fryer",
    "Digital air fryer with multiple settings",
    "Home Appliances",
    120.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    7,
    "Wireless Mouse",
    "Ergonomic wireless mouse",
    "Electronics",
    25.0,
    102,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    8,
    "Office Desk",
    "Spacious office desk",
    "Furniture",
    400.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    9,
    "External Hard Drive",
    "1TB external hard drive",
    "Electronics",
    100.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    10,
    "Instant Pot",
    "Multi-functional pressure cooker",
    "Home Appliances",
    80.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),

  // New products starting from ID 11
  new Product(
    11,
    "Smartwatch",
    "Fitness tracker with heart rate monitor",
    "Electronics",
    250.0,
    102,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    12,
    "Gaming Console",
    "Next-gen gaming console with 4K support",
    "Electronics",
    500.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    13,
    "Blender",
    "High-speed blender with multiple settings",
    "Home Appliances",
    90.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    14,
    "Bookshelf",
    "Wooden bookshelf for storage",
    "Furniture",
    150.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    15,
    "Portable Speaker",
    "Bluetooth portable speaker with bass boost",
    "Electronics",
    70.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    16,
    "Electric Kettle",
    "Rapid boiling electric kettle",
    "Home Appliances",
    30.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    17,
    "Mechanical Keyboard",
    "Gaming mechanical keyboard with RGB lighting",
    "Electronics",
    120.0,
    102,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    18,
    "Lounge Chair",
    "Comfortable lounge chair for relaxation",
    "Furniture",
    300.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    19,
    "Tablet",
    "10-inch tablet with 64GB storage",
    "Electronics",
    350.0,
    101,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    20,
    "Vacuum Cleaner",
    "Cordless vacuum cleaner with powerful suction",
    "Home Appliances",
    200.0,
    103,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    21,
    "Old Model Laptop",
    "Previous generation laptop with 8GB RAM",
    "Electronics",
    600.0,
    101,
    true,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    22,
    "Basic Smartphone",
    "Older model smartphone with 64GB storage",
    "Electronics",
    400.0,
    102,
    true,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    23,
    "Classic Coffee Maker",
    "Traditional coffee maker without grinder",
    "Home Appliances",
    100.0,
    103,
    true,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    24,
    "Vintage Desk Chair",
    "Classic style desk chair",
    "Furniture",
    150.0,
    104,
    true,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    25,
    "Wired Headphones",
    "Basic wired headphones",
    "Electronics",
    30.0,
    101,
    true,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    26,
    "Dining Table",
    "Wooden dining table with seating for six",
    "Furniture",
    450.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    27,
    "TV Stand",
    "Modern TV stand with storage compartments",
    "Furniture",
    250.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
  new Product(
    28,
    "Nightstand",
    "Bedside nightstand with drawers",
    "Furniture",
    100.0,
    104,
    false,
    1, // quantity
    "https://picsum.photos/200/300" // image URL
  ),
];

module.exports = products;
