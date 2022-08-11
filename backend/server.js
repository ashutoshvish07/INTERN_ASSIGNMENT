const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    const product_data = JSON.parse(data).data;

    res.send(product_data);
  });
});

app.listen(8080, () => {
  console.log("lisning at 8080");
});
