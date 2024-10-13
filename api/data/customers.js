const Customer = require("../models/Customer");

const customers = [
  new Customer(
    1,
    "John Doe",
    "123 Main St",
    "Calgary",
    "john.doe@example.com",
    "403-555-0101",
    "active"
  ),
  new Customer(
    2,
    "Jane Smith",
    "234 Elm St",
    "Airdrie",
    "jane.smith@example.com",
    "403-555-0202",
    "active"
  ),
  new Customer(
    3,
    "Michael Johnson",
    "345 Maple Ave",
    "Cochrane",
    "michael.johnson@example.com",
    "403-555-0303",
    "inactive"
  ),
  new Customer(
    4,
    "Emily Davis",
    "456 Pine St",
    "Okotoks",
    "emily.davis@example.com",
    "403-555-0404",
    "active"
  ),
  new Customer(
    5,
    "Chris Wilson",
    "567 Cedar Blvd",
    "Chestermere",
    "chris.wilson@example.com",
    "403-555-0505",
    "active"
  ),
];

module.exports = customers;
