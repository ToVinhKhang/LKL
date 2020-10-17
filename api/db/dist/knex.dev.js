"use strict";

var environment = process.env.NODE_ENV || 'development';

var config = require('../knexfile.js')[environment]; // Initialize knex.


module.exports = {
  knex: require('knex')(config)
};