'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _define = require('../define');

var _define2 = _interopRequireDefault(_define);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyToken = function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    res.status(400).send('Missing token');
    return;
  }
  _jsonwebtoken2.default.verify(req.headers.authorization, _define2.default.KEY, function (err, data) {
    if (err) {
      res.status(401).send('Token Inválido');
      return;
    }
    res.locals.userId = data.id;
    next();
  });
};
exports.default = verifyToken;