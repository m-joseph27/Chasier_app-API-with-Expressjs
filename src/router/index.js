const express = require('express');
const menu = require('./menu');
// const user = require('./menu');
const category = require('./category');
// const borrowbook = require('./loan');

const Router = express.Router();
Router
  .use('/menu', menu)
  // .use('/user', user)
  // .use('/category', category)
  // .use('/borrowbook', borrowbook)

module.exports = Router;