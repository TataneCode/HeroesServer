import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    database: process.env.DATABASE,
    host: process.env.HOST,
    logging: false,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT, 10),
    synchronize: false,
    type: 'postgres',
    username: process.env.USER,
    entities: [
        "src/entity/**/*.ts"
     ],
     migrations: [
        "src/migration/**/*.ts"
     ],
     subscribers: [
        "src/subscriber/**/*.ts"
     ],
     cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
     }
  };
  
  module.exports = connectionOptions;