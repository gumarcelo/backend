import bcrypt from 'bcrypt'
import df from '../define'
import jwt from 'jsonwebtoken'

module.exports = app =>{
  return {
    save: (req, res) => {
      if (req.body.password != req.body.repassword) {
        res.status(401).send('Senhas diferentes.')
        return
      }
      const saltRounds = 10
      const myPlaintextPassword = req.body.password
      bcrypt.genSalt(saltRounds, function(err, salt){
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
          if(err) {
            res.status(401).send('Err: ' +err)
            return
          } else {
            req.body.password = hash
            app.src.models.user.save(req, res)
          }
        })
      })
    },
    update: (req, res) => { app.src.models.user.update(req, res) },
    get: (req, res) => {
      if (!req.params.id) {
        app.src.models.user.getAll(req, res)
      } else {
        app.src.odels.user.getOne(req, res)
      }
    },
    delete: (req, res) => { app.src.models.user.delete(req, res) },
    login: (req, res) => { app.src.models.user.login(req, (e, cb) => {
        if (e) {
          console.log(e)
          return
        }
        console.log(cb)
        bcrypt.compare(req.body.password, cb.password, function(err, result) {
          if (err) {
            return
          }
          jwt.sign({ id: cb._id }, df.KEY, (err, token) => { //1param: payload, 2º chave criada, função para validar erro ou devolver a resposta pro usuario
            if (err) {
              console.log(err)
              return
            }
            res.json({token: token})
          })
        })
      })
    },
    // verificação do token
    verificar: (req, res) => {
      if(!req.headers.authorization) {
        console.log('Erro na verificação do token')
      }
      jwt.verify(req.headers.authorization, df.KEY, function(err, decoded){
        if (err) {
          console.log('deu erro')
          res.json(err)
          return
        }
        res.status(200).send(decoded)
      })
    }
  }
}