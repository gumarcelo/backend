'use strict';

var _user = require('../schema/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  return {
    save: function save(req, res) {
      _user2.default.create(req.body, function (err, data) {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(201).send('Registrado com sucesso');
      });
    },
    update: function update(req, res) {
      _user2.default.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, data) {
        if (err) {
          res.status(404).send('Usuario não encontrado.');
          return;
        }
        res.status(200).json(data);
        console.log('Atualizado com sucesso');
      });
    },
    getAll: function getAll(req, res) {
      _user2.default.find({}, function (err, data) {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(data);
      });
    },
    getOne: function getOne(req, res) {
      _user2.default.findById({ _id: req.params.id }, function (err, data) {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(200).json(data);
      });
    },
    delete: function _delete(req, res) {
      _user2.default.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
        if (err) {
          res.status(404).send('Id não encontrado');
          return;
        }
        res.status(200).send('Usuario removido com sucesso.');
      });
    },
    login: function login(req, cb) {
      _user2.default.findOne({ email: req.body.email }, function (err, data) {
        if (err) {
          cb(true, 404);
          return;
        }
        cb(false, data);
      });
    }
  };
};