import mongoose from 'mongoose'
import define from '../define'

mongoose.Promise = global.Promise
mongoose.connect(define.MongodbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log('Gustavo conectado.')
}).catch((err) => {
  console.log('Gustavo ta com erro' + err)
})

module.exports = mongoose