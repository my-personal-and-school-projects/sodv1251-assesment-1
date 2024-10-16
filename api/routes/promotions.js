const express = require("express");
const router = express.Router();
const Promotion = require("../models/Promotion.js").default;
const promotions = require("../data/promotions.js");

//Get all promos
router.get("/", (req, res) => {
  res.json(promotions);
});

//get promos by id
router.get("/:id", (req, res) => {
  const promo = promotions.find((p) => p.id === parseInt(req.params.id));

  if (!promo) {
    return res.status(404).send("Promo not found");
  } else {
    res.json(promo);
  }
});

module.exports = router;
