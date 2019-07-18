import check from '../middlewares/check'
import { celebNewTask, celebGetTask, celebUpdateTask, celebDeleteTask } from '../middlewares/celeb'
module.exports = app => {
  /**
   * ROUTE: /task
   * PUBLIC: false
   */
  app.post('/task', celebNewTask, (req, res) => {
    check(req, res, (data) =>{
      app.src.controllers.task.save(req, res, data)
    })
  })

  app.get('/task/:id?', celebGetTask, (req, res) => {
    check(req, res, (data) => {
      app.src.controllers.task.get(req, res, data)
    })
  })

  app.put('/task/:id', celebUpdateTask, (req, res) => {
    check(req, res, (data) => {
      app.src.controllers.task.update(req, res, data)
    })
  })

  app.delete('/task/:id', celebDeleteTask, (req, res) => {
    check(req, res, (data) => {
      app.src.controllers.task.delete(req, res, data)
    })
  })
}