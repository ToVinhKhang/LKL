const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Schedule extends BaseModel {
  static get tableName() {
    return 'schedule';
  }

  static get relationMappings() {
    return relation(Schedule);
  }
}

module.exports = {
  Schedule,
};
