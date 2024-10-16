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
    "active"
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
  new Customer(
    6,
    "Barack Obama",
    "123 Lincoln Blvd",
    "Calgary",
    "barack.obama@example.com",
    "312-555-0106",
    "active"
  ),
  new Customer(
    7,
    "Hillary Clinton",
    "234 Clinton St",
    "Fort SK",
    "hillary.clinton@example.com",
    "212-555-0107",
    "inactive"
  ),
  new Customer(
    8,
    "Nelson Mandela",
    "345 Freedom Ave",
    "Okotoks",
    "nelson.mandela@example.com",
    "011-555-0108",
    "active"
  ),
  new Customer(
    9,
    "Angela Merkel",
    "456 Unity Rd",
    "Red Deer",
    "angela.merkel@example.com",
    "030-555-0109",
    "inactive"
  ),
  new Customer(
    10,
    "Winston Churchill",
    "567 Victory St",
    "Edmonton",
    "winston.churchill@example.com",
    "020-555-0110",
    "active"
  ),
];

module.exports = customers;
