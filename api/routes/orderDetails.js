const express = require("express");
const router = express.Router();
const OrderDetails = require("../models/OrderDetails.js").default;
const ordersDetails = require("../data/orders-details.js");

//get all orderDetails items
router.get("/", (req, res) => {
  res.json(ordersDetails);
});

//get orderDetails items by id
router.get("/:id", (req, res) => {
  const orderDetailsItem = ordersDetails.find(
    (od) => od.id === parseInt(req.params.id)
  );

  if (!orderDetailsItem) {
    return res.ststus(404).send("Item not found");
  } else {
    res.json(orderDetailsItem);
  }
});

module.exports = router;
