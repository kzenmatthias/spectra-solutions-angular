import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello flieter");
});

app.listen(3000);
