const express = require("./server/config/express");
const secrets = require("./secret.json");
const mongoose = require("mongoose");

const port = 3000;

mongoose
  .connect(secrets["DATABASE"])
  .then((result) => {
    express().listen(port, () => {
      console.log(port, "번 포트 OPEN");
    });
  })
  .catch((err) => console.log("err:", err));
