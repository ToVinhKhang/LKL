const { generateAuthToken, findByCredentials } = require('./method');
const { BaseModel } = require('../basemodel');
const { knex } = require('../../knex');
const relation = require('./relation');

// Give the knex instance to objection.
BaseModel.knex(knex);

// User Model.
class User extends BaseModel {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return relation(User);
  }
}

User.findByCredentials = findByCredentials;
User.prototype.generateAuthToken = generateAuthToken;

module.exports = {
    User,
};
