import task from '../schema/user'
module.exports = app => {
  return {
    save: (req, res, data) => {
      task.findById(data.id, (err, data) => {
          if(err) {
            res.status(400).send('id inválido')
            return
          }
        console.log('entrei no models')
        data.tasks.push(req.body)
        data.save((err, data) => {
          res.json(data)
        })
      })
    },
    update: (req, res, data) => {
      task.findById(data.id, (err, data) => {
        if(err) {
          res.status(400).send('id inválido')
          return
        }
        const idTask = data.tasks.filter((obj) => {
          return obj._id == req.params.id
        })
        console.log(idTask)
        if (req.body.title != idTask[0].title) {
          idTask[0].title = req.body.title
        }
        else if (req.body.desc != idTask[0].description) {
          idTask[0].description = req.body.description
        }
        else if (req.body.dateLimit != idTask[0].dateLimit) {
          idTask[0].dateLimit = req.body.dateLimit
        }
        else if (req.body.status != idTask[0].status) {
          idTask[0].status = req.body.status
        }
        console.log(idTask)
        data.save((err) => {
          if (err) return res.status(400).send(`erro: ${err}`)
          res.status(200).send('Salvo com sucesso')
        })
      })
    },
    getOne: (req, res, data) => {
      task.findById({_id: data.id}, (err, user) => {
        if(err) {
          res.status(404).send('id inválido')
          return
        }
        const findTask = user.tasks.filter((o) => {
          return o._id==req.params.id
        })
        res.status(200).send(findTask[0])
      })
    },
    getAll: (req, res, data) => {
      task.findById({_id: data.id}, (err, user) => {
        if(err) {
          res.status(404).send('id inválido')
          return
        }
        res.json(user.tasks)
      })
    },
    delete: (req, res, data) => {
      task.findById({_id: data.id}, (err, user) => {
        if(err) {
          res.status(404).send('id inválido')
          return
        }
        let ind = null
        user.tasks.filter((o, i) => {
          if (o._id == req.params.id) ind = i
          return o._id == req.params.id
        })
        user.tasks.splice(ind, 1)
        user.save((err) => {
          if(err) {
            res.status(404).send('tarefa não excluída')
            return
          }
          res.status(200).send('Tarefa excluída')
        })
      })
    }
  } 
}