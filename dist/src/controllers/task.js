"use strict";

module.exports = function (app) {
  return {
    save: function save(req, res, data) {
      app.src.models.task.save(req, res, data);
    },
    update: function update(req, res, data) {
      app.src.models.task.update(req, res, data);
    },
    delete: function _delete(req, res, data) {
      app.src.models.task.delete(req, res, data);
    },
    get: function get(req, res, data) {
      if (req.params.id) {
        app.src.models.task.getOne(req, res, data);
      } else {
        app.src.models.task.getAll(req, res, data);
      }
    }
  };
};