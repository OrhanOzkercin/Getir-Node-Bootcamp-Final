const Record = require('../models/record');

const getRecordsService = async (where) => {
  const startDate = new Date(where.startDate);
  const endDate = new Date(where.endDate);
  const { minCount, maxCount } = where;
  const records = await Record.aggregate([
    {
      $project: {
        _id: false,
        key: true,
        createdAt: true,
        totalCount: {
          $reduce: {
            input: '$counts',
            initialValue: 0,
            in: {
              $sum: ['$$value', '$$this'],
            },
          },
        },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },

  ]);

  return records;
};

module.exports = { getRecordsService };
