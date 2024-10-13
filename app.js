const express = require("express");
const path = require("path");
const customerRoutes = require("./api/routes/customers");

const app = express();

//Serve static files
app.use("/static", express.static(path.resolve(__dirname, "public")));

app.use("/api/customers", customerRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on http://localhost:3000")
);
