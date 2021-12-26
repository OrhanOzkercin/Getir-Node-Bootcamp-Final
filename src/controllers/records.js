const { getRecordsService } = require('../services/records');

const getRecords = async (req, res) => {
  const records = await getRecordsService(req.body);
  res.status(200).send({
    code: 0,
    msg: 'Success',
    records,
  });
};

module.exports = getRecords;
