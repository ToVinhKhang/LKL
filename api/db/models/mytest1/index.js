const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Mytest1 extends BaseModel {
  static get tableName() {
    return 'mytest1';
  }

  static get relationMappings() {
    return relation(Mytest1);
  }
}

module.exports = {
    Mytest1,
};
