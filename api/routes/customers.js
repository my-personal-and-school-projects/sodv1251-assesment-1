const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer.js").default;
const customers = require("../data/customers.js");

router.get("/", (req, res) => {
  console.log("GET /api/customers route hit");
  res.json(customers);
});

router.get("/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  if (!customer) {
    return res.status(404).send("customer not Found");
  } else {
    res.json(customer);
  }
});

module.exports = router;
