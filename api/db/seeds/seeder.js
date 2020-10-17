const mytest1 = require('./detail/00_mytest1.js');
const user = require('./detail/01_user.js');
// add your file
// Example:
const migration_name = require('./detail/03_migration_name.js');


exports.seed = async function (knex) {
  await mytest1(knex);
  await user(knex);

  // Example:
  await migration_name(knex)

  return;
};