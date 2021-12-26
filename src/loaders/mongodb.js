const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once('open', () => {
  console.log("MongoDB'ye baglanti basarilidir..");
});

const connectDB = async () => {
  const { DB_HOST } = process.env;
  try {
    await Mongoose.connect(`${DB_HOST}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
