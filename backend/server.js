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


app.post("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const req_data = req.body;
 console.log(req_data)
  const dbFile = fs.readFileSync("./db.json", "utf-8");
  const prev_data = JSON.parse(dbFile);
  const { data } = prev_data;
  data.push({ ...req_data, id: data.length + 1 });
  const updated_data = JSON.stringify(prev_data);

  fs.writeFileSync("./db.json", updated_data, "utf-8");
  res.send(data);
});

app.listen(8081, () => {
  console.log("lisning at 8081");
});
