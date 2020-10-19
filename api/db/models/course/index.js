const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class Course extends BaseModel {
  static get tableName() {
    return 'course';
  }

  static get relationMappings() {
    return relation(Course);
  }
}

module.exports = {
  Course,
};
