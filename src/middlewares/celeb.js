import { celebrate, Joi, errors } from 'celebrate'

module.exports = {
  //criação de usuários
  celebNewUser: celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required(),
      repassword: Joi.string().min(4).required()
    })
  }),
  //busca de usuários
  celebGetUser: celebrate({
    headers: Joi.object({
      authorization: Joi.string().required()
    }).unknown(true),
    params: {
      id: Joi.string().optional()
    }
  }),
  //atualizar usuários
  celebUpdateUser: celebrate ({
    headers: Joi.object({
      authorization: Joi.string().required()
    }).unknown(true),
    body: Joi.object().keys({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required()
    }),
    params: {
      id: Joi.string().required()
    }
  }),
  //deletar usuários
  celebDeleteUser: celebrate ({
    headers: Joi.object({
      authorization: Joi.string().required()
    }).unknown(true),
    params: {
      id: Joi.string().required()
    }
  }),
  //logar usuários
  celebLogin: celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required()
    })
  }),
}