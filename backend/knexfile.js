module.exports = {

    client: 'postgres',

  
    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'spk',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
