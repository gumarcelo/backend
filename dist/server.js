'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _consign = require('consign');

var _consign2 = _interopRequireDefault(_consign);

var _define = require('./src/define');

var _define2 = _interopRequireDefault(_define);

var _database = require('./src/database');

var _database2 = _interopRequireDefault(_database);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//para reutilizar o codigo e organizar
//limpa o body, deixa o json pronto para utilizar
var app = (0, _express2.default)(); //importamos aqui ja para fazer a requisição e ja começa conectado, desvantagem de sobrecarregar nossa aplicação
//para trabalhar com modularização, ele importa e deixa disponibilizado dentro da aplicação para a gente chamar nas rotas
//biblioteca para não ter que usar o node puro


app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json());

_database2.default;

(0, _consign2.default)().include('src/routes').then('src/controllers').then('src/models').into(app);

app.listen(_define2.default.AppPort, function () {
  return console.log('Servidor rodando ');
});