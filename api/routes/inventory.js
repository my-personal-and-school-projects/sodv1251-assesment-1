const express = require("express");
const router = express.Router();
const Inventory = require("../models/Inventory.js").default;
const productsInventory = require("../data/products-inventory.js");

//get all the inventory items
router.get("/", (req, res) => {
  console.log(productsInventory); // Log the data being sent
  res.json(productsInventory);
});

//get inventory items by the id
router.get("/:id", (req, res) => {
  const inventoryItem = productsInventory.find(
    (i) => i.id === parseInt(req.params.id)
  );

  if (!inventoryItem) {
    return res.status(404).send("Inventory item not found");
  } else {
    res.json(inventoryItem);
  }
});

module.exports = router;
