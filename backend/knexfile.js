const { db } = require('./.env')

module.exports = {

    client: 'postgres',

  
    client: 'postgresql',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
