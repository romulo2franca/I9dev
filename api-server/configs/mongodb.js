/* eslint-disable no-undef */
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`, { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

module.exports = mongoose;
