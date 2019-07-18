'use strict';

var _check = require('../middlewares/check');

var _check2 = _interopRequireDefault(_check);

var _celeb = require('../middlewares/celeb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  /**
   * ROUTE: /task
   * PUBLIC: false
   */
  app.post('/task', _celeb.celebNewTask, function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.src.controllers.task.save(req, res, data);
    });
  });

  app.get('/task/:id?', _celeb.celebGetTask, function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.src.controllers.task.get(req, res, data);
    });
  });

  app.put('/task/:id', _celeb.celebUpdateTask, function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.src.controllers.task.update(req, res, data);
    });
  });

  app.delete('/task/:id', _celeb.celebDeleteTask, function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.src.controllers.task.delete(req, res, data);
    });
  });
};