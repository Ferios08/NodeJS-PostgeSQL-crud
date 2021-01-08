require('dotenv').config();
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;

const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
const db = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: 'postgres',
    /*dialect: one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// or one line setup:
// const sequelize = new Sequelize(`postgres:/${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}`)

module.exports = db;