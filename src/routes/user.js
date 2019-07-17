import check from '../middlewares/check'
import {celebrate, Joi} from 'celebrate'
import { celebNewUser, celebGetUser, celebUpdateUser, celebDeleteUser, celebLogin } from '../middlewares/celeb'

module.exports = app => {
    /**
     * ROUTE: /user/register
     * VERB: post
     * PUBLIC: true
    */
    app.post('/user/register', celebNewUser, (req, res) => {
      app.src.controllers.user.save(req, res)
    })
    /**
     * ROUTE: /user/id
     * PUBLIC: false
     */
    app.get('/user/:id?', celebGetUser, check, (req, res) => {
      app.src.controllers.user.get(req, res)
    })
    /**
     * ROUTE: /user/id
     * VERB: put
     * PUBLIC: false
     */
    app.put('/user/:id', celebUpdateUser, check, (req, res) => {
      app.src.controllers.user.update(req, res)
    })
    /**
     * ROUTE: /user/id
     * PUBLIC: false
     */
    app.delete('/user/:id', celebDeleteUser, check, (req, res) => {
      app.src.controllers.user.delete(req, res)
    })
    /**
     * ROUTE: /user/login
     * VERB: GET
     * PUBLIC: true
     */
    app.post('/user/login', celebLogin, (req, res) => {
      app.src.controllers.user.login(req, res)
    })
}