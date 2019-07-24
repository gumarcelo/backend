import task from '../schema/user'
module.exports = app => {
  return {
    save: (req, res, data) => {
      task.findById(data.id, (err, data) => {
          if(err) {
            res.status(400).send('id inválido')
            return
          }
        data.tasks.push(req.body)
        data.save((err, data) => {
          res.json(data.tasks)
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
        if (req.body.title != idTask[0].title) {
          idTask[0].title = req.body.title
        }
        if (req.body.description != idTask[0].description) {
          idTask[0].description = req.body.description
        }
        if (req.body.dateLimit != idTask[0].dateLimit) {
          idTask[0].dateLimit = req.body.dateLimit
        }
        if (req.body.status != idTask[0].status) {
          idTask[0].status = req.body.status
        }
        data.save((err, result) => {
          if (err) {
            console.log('erro ao atualizar a tarefa')
            return res.status(400).send(`erro: ${err}`)
          }
          res.status(200).send(result.tasks)
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