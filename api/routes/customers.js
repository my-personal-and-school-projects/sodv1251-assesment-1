const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer.js").default;
const customers = require("../data/customers.js");

//get all customers
router.get("/", (req, res) => {
  res.json(customers);
});

//get customer by id
router.get("/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  if (!customer) {
    return res.status(404).send("Customer not Found");
  } else {
    res.json(customer);
  }
});

module.exports = router;
