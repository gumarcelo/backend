"use strict";

module.exports = function (app) {
  return {
    save: function save(req, res, data) {
      app.models.task.save(req, res, data);
    },
    update: function update(req, res, data) {
      app.models.task.update(req, res, data);
    },
    delete: function _delete(req, res, data) {
      app.models.task.delete(req, res, data);
    },
    get: function get(req, res, data) {
      if (req.params.id) {
        app.models.task.getOne(req, res, data);
      } else {
        app.models.task.getAll(req, res, data);
      }
    }
  };
};