module.exports = app => {
  return {
    save: (req, res, data) => {
      app.models.task.save(req, res, data)
    },
    update: (req, res, data) => {
      app.models.task.update(req, res, data)
    },
    delete: (req, res, data) => {
      app.models.task.delete(req, res, data)
    },
    get: (req, res, data) => {
      if (req.params.id) {
        app.models.task.getOne(req, res, data)
      } else {
        app.models.task.getAll(req, res, data)
      }
    }
  }
}