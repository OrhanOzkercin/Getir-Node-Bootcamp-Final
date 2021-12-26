const mongoose = require('mongoose');

const { model } = mongoose;
const recordSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      required: true,
      trim: true,
    },
    counts: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Record = model('record', recordSchema);
module.exports = Record;
