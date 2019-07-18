'use strict';

var _user = require('../schema/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  return {
    save: function save(req, res, data) {
      _user2.default.findById(data.id, function (err, data) {
        if (err) {
          res.status(400).send('id inválido');
          return;
        }
        data.tasks.push(req.body);
        data.save(function (err, data) {
          res.json(data);
        });
      });
    },
    update: function update(req, res, data) {
      _user2.default.findById(data.id, function (err, data) {
        if (err) {
          res.status(400).send('id inválido');
          return;
        }
        var idTask = data.tasks.filter(function (obj) {
          return obj._id == req.params.id;
        });
        console.log(idTask);
        if (req.body.title != idTask[0].title) {
          idTask[0].title = req.body.title;
        } else if (req.body.desc != idTask[0].description) {
          idTask[0].description = req.body.description;
        } else if (req.body.dateLimit != idTask[0].dateLimit) {
          idTask[0].dateLimit = req.body.dateLimit;
        } else if (req.body.status != idTask[0].status) {
          idTask[0].status = req.body.status;
        }
        console.log(idTask);
        data.save(function (err) {
          if (err) return res.status(400).send('erro: ' + err);
          res.status(200).send('Salvo com sucesso');
        });
      });
    },
    getOne: function getOne(req, res, data) {
      _user2.default.findById({ _id: data.id }, function (err, user) {
        if (err) {
          res.status(404).send('id inválido');
          return;
        }
        var findTask = user.tasks.filter(function (o) {
          return o._id == req.params.id;
        });
        res.status(200).send(findTask[0]);
      });
    },
    getAll: function getAll(req, res, data) {
      _user2.default.findById({ _id: data.id }, function (err, user) {
        if (err) {
          res.status(404).send('id inválido');
          return;
        }
        res.status(200).send(user.tasks);
      });
    },
    delete: function _delete(req, res, data) {
      _user2.default.findById({ _id: data.id }, function (err, user) {
        if (err) {
          res.status(404).send('id inválido');
          return;
        }
        var ind = null;
        user.tasks.filter(function (o, i) {
          if (o._id == req.params.id) ind = i;
          return o._id == req.params.id;
        });
        user.tasks.splice(ind, 1);
        user.save(function (err) {
          if (err) {
            res.status(404).send('tarefa não excluída');
            return;
          }
          res.status(200).send('Tarefa excluída');
        });
      });
    }
  };
};