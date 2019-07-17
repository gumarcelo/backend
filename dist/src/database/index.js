'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _define = require('../define');

var _define2 = _interopRequireDefault(_define);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(_define2.default.MongodbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(function () {
  console.log('Gustavo conectado.');
}).catch(function (err) {
  console.log('Gustavo ta com erro' + err);
});

module.exports = _mongoose2.default;