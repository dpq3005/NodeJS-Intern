const Joi = require('joi');

const basicPayload = {
  content: Joi.string().required(),
  articleID: Joi.string().required(),
  userID: Joi.string().required(),
  userVoteID: Joi.string().required()
}

const idPayload = {
  id: Joi.string().required()
}

const validation = {
  validate: { payload: Joi.object(basicPayload) }
}

const deleteValidation = {
  all: { payload: Joi.object(idPayload) }
}

module.exports = {
  validation,
  deleteValidation
}