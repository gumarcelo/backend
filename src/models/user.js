import User from '../schema/user'
module.exports = app => {
  return {
    save: (req, res) => {
      User.create(req.body, (err, data ) => {
        if (err) {
          res.status(500).send(err)
          return
        }
        res.status(200).send('Registrado com sucesso')
      })
    },
    update: (req, res) => {
      User.findByIdAndUpdate({_id: req.params.id}, req.body, (err, data) => {
        if (err) {
          res.status(404).send('Usuario não encontrado.')
          return
        }
        res.status(200).json(data)
        console.log('Atualizado com sucesso')
      })
    },
    getAll: (req, res) => {
      User.find({}, (err, data) => {
        if (err) {
          res.status(500).send(err)
          return
        }
        res.status(200).json(data)
      })
    },
    getOne: (req, res) => {
      User.findById({_id: req.params.id}, (err, data) => {
        if (err) {
          res.status(500).send(err)
          return
        }
        res.status(200).json(data)
      })
    },
    delete: (req, res) => {
      User.findByIdAndRemove({_id: req.params.id},(err, data) => {
        if (err) {
          res.status(404).send('Id não encontrado')
          return
        }
        res.status(200).send('Usuario removido com sucesso.')
      })
    },
    // login
    login: (req, cb) => {
      User.findOne({email: req.body.email},(err, data) => {
        if(err) {
          cb(true, 404)
          return
        }
        cb(false, data)
      })
    }
  }
}