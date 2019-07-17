'use strict';

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _define = require('../define');

var _define2 = _interopRequireDefault(_define);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  return {
    save: function save(req, res) {
      if (req.body.password != req.body.repassword) {
        res.status(401).send('Senhas diferentes.');
        return;
      }
      var saltRounds = 10;
      var myPlaintextPassword = req.body.password;
      _bcrypt2.default.genSalt(saltRounds, function (err, salt) {
        _bcrypt2.default.hash(myPlaintextPassword, salt, function (err, hash) {
          if (err) {
            res.status(401).send('Err: ' + err);
            return;
          } else {
            req.body.password = hash;
            app.src.models.user.save(req, res);
          }
        });
      });
    },
    update: function update(req, res) {
      app.src.models.user.update(req, res);
    },
    get: function get(req, res) {
      if (!req.params.id) {
        app.src.models.user.getAll(req, res);
      } else {
        app.src.odels.user.getOne(req, res);
      }
    },
    delete: function _delete(req, res) {
      app.src.models.user.delete(req, res);
    },
    login: function login(req, res) {
      app.src.models.user.login(req, function (e, cb) {
        if (e) {
          console.log(e);
          return;
        }
        console.log(cb);
        _bcrypt2.default.compare(req.body.password, cb.password, function (err, result) {
          if (err) {
            return;
          }
          _jsonwebtoken2.default.sign({ id: cb._id }, _define2.default.KEY, function (err, token) {
            //1param: payload, 2º chave criada, função para validar erro ou devolver a resposta pro usuario
            if (err) {
              console.log(err);
              return;
            }
            res.json({ token: token });
          });
        });
      });
    },
    // verificação do token
    verificar: function verificar(req, res) {
      if (!req.headers.authorization) {
        console.log('Erro na verificação do token');
      }
      _jsonwebtoken2.default.verify(req.headers.authorization, _define2.default.KEY, function (err, decoded) {
        if (err) {
          console.log('deu erro');
          res.json(err);
          return;
        }
        res.status(200).send(decoded);
      });
    }
  };
};