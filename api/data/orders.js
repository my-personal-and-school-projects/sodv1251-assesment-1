const Order = require("../models/Order");

const orders = [
  new Order(1, 1, "2024-10-01", 4587.0, "paid", "completed"), // John Doe
  new Order(2, 2, "2024-10-02", 487.0, "paid", "completed"), // Jane Smith
  new Order(3, 3, "2024-10-03", 204.75, "unpaid", "pending"), // Michael Johnson
  new Order(4, 4, "2024-10-04", 420.0, "paid", "completed"), // Emily Davis
  new Order(5, 5, "2024-10-05", 263.5, "paid", "completed"), // Chris Wilson
  new Order(6, 1, "2024-10-06", 907.5, "unpaid", "pending"), // John Doe
  new Order(7, 2, "2024-10-07", 94.5, "paid", "completed"), // Jane Smith
  new Order(8, 3, "2024-10-08", 216.75, "paid", "completed"), // Michael Johnson
  new Order(9, 4, "2024-10-09", 157.5, "paid", "completed"), // Emily Davis
  new Order(10, 5, "2024-10-10", 792.5, "unpaid", "pending"), // Chris Wilson
];

module.exports = orders;
