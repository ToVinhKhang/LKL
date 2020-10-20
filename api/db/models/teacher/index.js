const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Teacher extends BaseModel {
  static get tableName() {
    return 'teacher';
  }

  static get relationMappings() {
    return relation(Teacher);
  }
}

module.exports = {
  Teacher,
};
