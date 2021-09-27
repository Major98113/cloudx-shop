const { DB, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB,
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
