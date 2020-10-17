const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Notify extends BaseModel {
  static get tableName() {
    return 'notification';
  }

  static get relationMappings() {
    return relation(Notify);
  }
}

module.exports = {
  Notify,
};
