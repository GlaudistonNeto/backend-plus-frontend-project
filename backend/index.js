const app = require('express')();
const consign = require('consign');
const db = require('./config/db');

app.db = db;

consign()
  .then('./config/middlaweres')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.listen(3000, () => {
  console.log('Executing backend...')
});