const express = require("express")();

const list = [];
express.get("/", (req, res) => {
  res.send("Root Route");
});

express.get("/add/", (req, res) => {
  const { str } = req.query;
  list.push(str);
  res.send("String added");
});

express.get("/list/", (req, res) => {
  res.send(list);
});

express.listen(5000, () => {
  console.log("server started at port 5000");
});
