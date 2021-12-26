const { getRecordsService } = require('../services/records');

const getRecords = async (req, res) => {
  console.log('1');

  const records = await getRecordsService(req.body);
  console.log('2');
  res.status(200).send({
    code: 0,
    msg: 'Success',
    records,
  });
};

module.exports = getRecords;
