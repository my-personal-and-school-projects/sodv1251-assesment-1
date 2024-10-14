const Promotion = require("../models/Promotion");

const promotions = [
  new Promotion(1, "SAVE10", 10, false),
  new Promotion(2, "SAVE20", 20, false),
  new Promotion(3, "SAVE30", 30, true),
  new Promotion(4, "FREESHIP", 0, false),
  new Promotion(5, "HALFOFF", 50, false),
  new Promotion(6, "WELCOME15", 15, true),
];

module.exports = promotions;
