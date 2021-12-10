const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection')
require ('dotenv')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
