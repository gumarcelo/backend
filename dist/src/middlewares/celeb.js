'use strict';

var _celebrate = require('celebrate');

module.exports = {
  //criação de usuários
  celebNewUser: (0, _celebrate.celebrate)({
    body: _celebrate.Joi.object().keys({
      name: _celebrate.Joi.string().min(2).required(),
      email: _celebrate.Joi.string().email().required(),
      password: _celebrate.Joi.string().min(4).required(),
      repassword: _celebrate.Joi.string().min(4).required()
    })
  }),
  //busca de usuários
  celebGetUser: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    params: {
      id: _celebrate.Joi.string().optional()
    }
  }),
  //atualizar usuários
  celebUpdateUser: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    body: _celebrate.Joi.object().keys({
      name: _celebrate.Joi.string().min(2).required(),
      email: _celebrate.Joi.string().email().required()
    }),
    params: {
      id: _celebrate.Joi.string().required()
    }
  }),
  //deletar usuários
  celebDeleteUser: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    params: {
      id: _celebrate.Joi.string().required()
    }
  }),
  //logar usuários
  celebLogin: (0, _celebrate.celebrate)({
    body: _celebrate.Joi.object().keys({
      email: _celebrate.Joi.string().email().required(),
      password: _celebrate.Joi.string().min(4).required()
    })
  }),
  //criação de tarefas
  celebNewTask: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    body: _celebrate.Joi.object().keys({
      title: _celebrate.Joi.string().min(2).required(),
      description: _celebrate.Joi.string().required(),
      dateLimit: _celebrate.Joi.string().required()
    })
  }),
  //buscar uma ou todas as tarefas
  celebGetTask: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    params: {
      id: _celebrate.Joi.string().optional()
    }
  }),
  //atualização de tarefa
  celebUpdateTask: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    body: _celebrate.Joi.object().keys({
      status: _celebrate.Joi.string().required(),
      title: _celebrate.Joi.string().min(2).required(),
      description: _celebrate.Joi.string().required(),
      dateLimit: _celebrate.Joi.string().required()
    })
  }),
  //deletar uma tarefa
  celebDeleteTask: (0, _celebrate.celebrate)({
    headers: _celebrate.Joi.object({
      authorization: _celebrate.Joi.string().required()
    }).unknown(true),
    params: {
      id: _celebrate.Joi.string().required()
    }
  })
};