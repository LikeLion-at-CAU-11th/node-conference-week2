const express = require('./server/config/express');
const secrets = require('./secrets');
const mongoose = require('mongoose');

const port = 3000;

mongoose
  .connect(secrets["DATABASE"])
  .then(result => {
    express().listen(port, ()=>{
      console.log(port, `포트에서 대기중`);
    });
  })
  .catch(err => console.log('err', err));