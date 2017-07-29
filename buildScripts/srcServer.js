//  var express = require('express');
//  var path = require('path');
//  var open = require('open');

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users', (req, res) => {
  res.json([{
      "id": 1,
      "firstName": "Bob",
      "lastName": "Smith",
      "email": "bob@gmail.com"
    },

    {
      "id": 2,
      "firstName": "Rahul",
      "lastName": "Singh",
      "email": "rahul@gmail.com"
    },

    {
      "id": 3,
      "firstName": "Tina",
      "lastName": "Lee",
      "email": "tina@gmail.com"
    }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.info(err);
  } else {
    open('http://localhost:' + port);
  }
});
