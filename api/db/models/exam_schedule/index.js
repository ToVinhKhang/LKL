const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// Mytest1 Model.
class ExamSchedule extends BaseModel {
  static get tableName() {
    return 'exam_schedule';
  }

  static get relationMappings() {
    return relation(ExamSchedule);
  }
}

module.exports = {
  ExamSchedule,
};
