const Joi = require('joi');

const getRecords = Joi.object({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().required(),
});

module.exports = {
  getRecords,
};
