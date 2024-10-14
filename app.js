const express = require("express");
const path = require("path");
const customerRoutes = require("./api/routes/customers");
const productRoutes = require("./api/routes/products");
const inventoryRoutes = require("./api/routes/inventory");
const promotionRoutes = require("./api/routes/promotions");

const app = express();

//Serve static files
app.use("/static", express.static(path.resolve(__dirname, "public")));

//serve data
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products-inventory", inventoryRoutes);
app.use("/api/promotions", promotionRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on http://localhost:3000")
);
