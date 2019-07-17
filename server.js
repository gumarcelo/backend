import express from 'express' //biblioteca para não ter que usar o node puro
import bodyParser from 'body-parser' //limpa o body, deixa o json pronto para utilizar
import consign from 'consign' //para trabalhar com modularização, ele importa e deixa disponibilizado dentro da aplicação para a gente chamar nas rotas
import define from './src/define' //para reutilizar o codigo e organizar
import connectDatabase from './src/database' //importamos aqui ja para fazer a requisição e ja começa conectado, desvantagem de sobrecarregar nossa aplicação
import cors from 'cors'

const app = express()

app.use(cors())

app.use(bodyParser.json())

connectDatabase

consign()
  .include('src/routes')
  .then('src/controllers')
  .then('src/models') 
  .into (app)

app.listen(define.AppPort, () => console.log(`Servidor rodando `))