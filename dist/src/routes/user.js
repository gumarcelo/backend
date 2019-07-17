'use strict';

var _check = require('../middlewares/check');

var _check2 = _interopRequireDefault(_check);

var _celebrate = require('celebrate');

var _celeb = require('../middlewares/celeb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  /**
   * ROUTE: /user/register
   * VERB: post
   * PUBLIC: true
  */
  app.post('/user/register', _celeb.celebNewUser, function (req, res) {
    app.src.controllers.user.save(req, res);
  });
  /**
   * ROUTE: /user/id
   * PUBLIC: false
   */
  app.get('/user/:id?', _celeb.celebGetUser, _check2.default, function (req, res) {
    app.src.controllers.user.get(req, res);
  });
  /**
   * ROUTE: /user/id
   * VERB: put
   * PUBLIC: false
   */
  app.put('/user/:id', _celeb.celebUpdateUser, _check2.default, function (req, res) {
    app.src.controllers.user.update(req, res);
  });
  /**
   * ROUTE: /user/id
   * PUBLIC: false
   */
  app.delete('/user/:id', _celeb.celebDeleteUser, _check2.default, function (req, res) {
    app.src.controllers.user.delete(req, res);
  });
  /**
   * ROUTE: /user/login
   * VERB: GET
   * PUBLIC: true
   */
  app.post('/user/login', _celeb.celebLogin, function (req, res) {
    app.src.controllers.user.login(req, res);
  });
};