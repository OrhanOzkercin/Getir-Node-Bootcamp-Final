const express = require('express');
const schemas = require('../validations/records');
const validate = require('../middlewares/validate');
const getRecords = require('../controllers/records');

const router = express.Router();

router.route('/').post(validate(schemas.getRecords), getRecords);

module.exports = router;
