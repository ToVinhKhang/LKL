# BaseAPI
A base api structure

## Install

```
npm install yarn

yarn

npm install knex -g

npm install pg --save
```

## Create database
In this base, database name is test1. So, open pgadmin to create test1 database or use can run below command if you have postgres cli (OS: Linux)
```
su postgres

psql

create database test1;
```

## Create migrations

`migration_name` is your table name 
```
cd db

knex migrate:make migration_name
```

### Edit file just create (`*_migration_name`).
See more option  [here](http://knexjs.org/#Migrations-CLI)!

```
exports.up = function(knex) {
  // define your columns
  // Example
    return knex.schema.createTable('migration_name', (table) => {
        table.increments('id');
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
    });
};


exports.down = function(knex) {
  // action when drop your table
  // Example:
    return knex.schema.dropTable('migration_name');
};
```
### Up your table (migration)
```
knex migrate:up
```


## Create seed
I've defined this file (seeder.js). You just open this file and add your table follow instructure.

### Create data file
Open detail folder and create your data file. Create 03_migration_name.js here - 03 is order of file which seeder will run. That file should look like:
```
const {hashPassword} = require('../../../utils/helper')

module.exports = async (knex) => {
    await knex('migration_name').del();
    await knex('migration_name').insert([
      {
        username: 'doikhongnhulamo',
        password: await hashPassword('doikhongnhulamo')
      },
      {
        username: 'wibu',
        password: await hashPassword('linh')
      },
    ]);
  
    return;
};
```
Then edit seeder.js

```
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
```

Seedddddd
```
npx knex seed:run
```
So we already have a database, tables, column and data. Let load it.

## Create Model