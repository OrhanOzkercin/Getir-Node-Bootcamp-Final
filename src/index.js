const express = require('express');
const morgan = require('morgan');
const loaders = require('./loaders');
const config = require('./config');
const routes = require('./routes/index');

const app = express();
const port = process.env.APP_PORT || 3000;

config();
loaders();

app.use(morgan());
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
