const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
    number:{
      type: Sequelize.NUMBER,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false
      }
  })

module.exports = User;