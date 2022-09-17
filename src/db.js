const sequelize = require('sequelize');
const database = new  sequelize('registeixeira_PSH','registeixeira_PSH','123456',
{
    dialect:'mssql', host:'localhost',port:4001
});

database.sync();

module.exports = database;