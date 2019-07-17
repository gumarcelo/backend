import check from '../middlewares/check.js'
module.exports = app => {
  /**
   * ROUTE: /task
   * PUBLIC: false
   */
  // app.post('/task', (req, res) => {
  //   check(req, res, (data) =>{
  //     app.controllers.task.save(req, res, data)
  //   })
  // })

  app.get('/task/:id?', (req, res) => {
    check(req, res, (data) => {
      app.controllers.task.get(req, res, data)
    })
  })

  app.put('/task/:id', (req, res) => {
    check(req, res, (data) => {
      app.controllers.task.update(req, res, data)
    })
  })

  app.delete('/task/:id', (req, res) => {
    check(req, res, (data) => {
      app.controllers.task.delete(req, res, data)
    })
  })
}