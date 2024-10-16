const express = require("express");
const router = express.Router();
const Order = require("../models/Order.js").default;
const orders = require("../data/orders.js");

//Get all orders
router.get("/", (req, res) => {
  res.json(orders);
});

//get orders by id
router.get("/:id", (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));

  if (!order) {
    return res.ststus(404).send("Order not found");
  } else {
    res.json(product);
  }
});

module.exports = router;
