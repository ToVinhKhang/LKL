const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Student extends BaseModel {
  static get tableName() {
    return 'student';
  }

  static get relationMappings() {
    return relation(Student);
  }
}

module.exports = {
  Student,
};
