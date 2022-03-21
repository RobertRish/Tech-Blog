const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'asdfgf',
    email: 'smap@mpaquest.com',
    password: 'password123'
  },
  {
    username: 'tsmith',
    email: 'bryce@greg.com',
    password: 'password123'
  },
  {
    username: 'brucesteenson',
    email: 'bryce@hotmail.com',
    password: 'password123'
  },
  {
    username: 'reggieen',
    email: 'bryce@yahoo.com',
    password: 'password123'
  },
  {
    username: 'tyghesh',
    email: 'bryce@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;