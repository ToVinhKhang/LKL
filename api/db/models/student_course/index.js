const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class StudentCourse extends BaseModel {
  static get tableName() {
    return 'student_course';
  }

  static get relationMappings() {
    return relation(StudentCourse);
  }
}

module.exports = {
  StudentCourse,
};
