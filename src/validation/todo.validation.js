const Joi = require('joi');

const basicPayload = {
  item: Joi.string().required().description('the record name')
};

const idPayload = {
  id: Joi.string().required().description('record id')
};

const validations = {
  item: { payload: Joi.object(basicPayload) },
};

const deleteValidation = {
  id: {
    params: idPayload
  }
};

module.exports = { validations, deleteValidation };
