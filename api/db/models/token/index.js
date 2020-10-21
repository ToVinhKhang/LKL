const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Token extends BaseModel {
  static get tableName() {
    return 'token';
  }

  static get relationMappings() {
    return relation(Token);
  }
}

module.exports = {
  Token,
};
