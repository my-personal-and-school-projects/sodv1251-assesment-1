const OrderDetails = require("../models/OrderDetails.js");

const ordersDetails = [
  new OrderDetails(1, 1, 1, 3, 1200.0, 0, 180.0, 3600.0, null), // No discount, 5% tax
  new OrderDetails(2, 1, 2, 1, 800.0, 160.0, 32.0, 672.0, 2), // 20% discount, 5% tax
  new OrderDetails(3, 1, 3, 2, 150.0, 0, 15.0, 315.0, null), // No discount, 5% tax
  new OrderDetails(4, 2, 4, 1, 200.0, 10.0, 10.5, 200.5, 4), // 5% discount, 5% tax
  new OrderDetails(5, 2, 5, 1, 300.0, 30.0, 16.5, 286.5, 5), // 10% discount, 5% tax
  new OrderDetails(6, 3, 6, 1, 120.0, 0, 6.0, 126.0, null), // No discount, 5% tax
  new OrderDetails(7, 3, 7, 3, 25.0, 0, 3.75, 78.75, null), // No discount, 5% tax
  new OrderDetails(8, 4, 8, 1, 400.0, 0, 20.0, 420.0, null), // No discount, 5% tax
  new OrderDetails(9, 5, 9, 1, 100.0, 10.0, 5.5, 95.5, 1), // 10% discount, 5% tax
  new OrderDetails(10, 5, 10, 2, 80.0, 0, 8.0, 168.0, null), // No discount, 5% tax
  new OrderDetails(11, 6, 11, 2, 250.0, 0, 25.0, 525.0, null), // No discount, 5% tax
  new OrderDetails(12, 6, 12, 1, 500.0, 150.0, 32.5, 382.5, 3), // 30% discount, 5% tax
  new OrderDetails(13, 7, 13, 1, 90.0, 0, 4.5, 94.5, null), // No discount, 5% tax
  new OrderDetails(14, 8, 14, 1, 150.0, 15.0, 8.25, 143.25, 6), // 10% discount, 5% tax
  new OrderDetails(15, 8, 15, 1, 70.0, 0, 3.5, 73.5, null), // No discount, 5% tax
  new OrderDetails(16, 9, 16, 1, 30.0, 0, 1.5, 31.5, null), // No discount, 5% tax
  new OrderDetails(17, 9, 17, 1, 120.0, 0, 6.0, 126.0, null), // No discount, 5% tax
  new OrderDetails(18, 10, 18, 1, 300.0, 0, 15.0, 315.0, null), // No discount, 5% tax
  new OrderDetails(19, 10, 19, 1, 350.0, 105.0, 22.5, 267.5, 3), // 30% discount, 5% tax
  new OrderDetails(20, 10, 20, 1, 200.0, 0, 10.0, 210.0, null), // No discount, 5% tax
];

module.exports = ordersDetails;
