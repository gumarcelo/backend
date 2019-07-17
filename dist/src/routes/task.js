'use strict';

var _check = require('../middlewares/check.js');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  /**
   * ROUTE: /task
   * PUBLIC: false
   */
  // app.post('/task', (req, res) => {
  //   check(req, res, (data) =>{
  //     app.controllers.task.save(req, res, data)
  //   })
  // })

  app.get('/task/:id?', function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.controllers.task.get(req, res, data);
    });
  });

  app.put('/task/:id', function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.controllers.task.update(req, res, data);
    });
  });

  app.delete('/task/:id', function (req, res) {
    (0, _check2.default)(req, res, function (data) {
      app.controllers.task.delete(req, res, data);
    });
  });
};