const Joi = require('joi');

const basicPayload = {
  title: Joi.string().required(),
  text: Joi.string().required(),
  userID: Joi.string().required()
}

const validation = {
  all: { payload: Joi.object(basicPayload) }
}

module.exports = validation;