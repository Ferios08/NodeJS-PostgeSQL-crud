const Sequelize = require('sequelize');
const db = require('../config/database');

const Subscription = db.define('subscription', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Subscription;