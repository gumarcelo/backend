'use strict';

module.exports = function (app) {
  app.all('/', function (req, res) {
    res.send('Gustavo API');
  });
};