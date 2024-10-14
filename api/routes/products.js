const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js").default;
const products = require("../data/products.js");

//get all products
router.get("/", (req, res) => {
  res.json(products);
});

//get product by id
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).send("Product not found");
  } else {
    res.json(product);
  }
});

module.exports = router;
