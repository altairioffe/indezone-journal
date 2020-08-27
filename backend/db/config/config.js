const fs = require('fs');
const path = require('path');
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER_DEVELOPMENT,
    password: process.env.DB_PASS_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.DB_USER_PRODUCTION,
    password: process.env.DB_PASS_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};

