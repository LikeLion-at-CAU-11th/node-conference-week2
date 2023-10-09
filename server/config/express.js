const express = require("express");
const path = require("path");
const cors = require("cors");

module.exports = function () {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(express.static(path.join(process.cwd(), "views")));
  app.set("views", path.join(process.cwd(), "views"));
  app.set("view engine", "ejs");

  app.engine("ejs", require("ejs").renderFile);

  require("../src/routes.js")(app);

  return app;
};
