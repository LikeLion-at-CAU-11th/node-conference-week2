const express = require("express");
const path = require("path");

module.exports = function () {
  const app = express();
  app.use(express.json());

  app.use(express.static(path.join(process.cwd(), "views"))); // 정적 파일 제공 경로 지정 (css 적용 경로 설정)
  app.set("views", path.join(process.cwd(), "views")); // views 폴더 지정
  app.set("view engine", "ejs"); // 템플릿 엔진 설정

  app.engine("ejs", require("ejs").renderFile); // ejs 확장자 + ejs 템플릿 엔진의 renderFile을 callback으로 설정
  // app.engine('html', require('ejs').renderFile);

  require("../src/routes.js")(app);

  return app;
};
