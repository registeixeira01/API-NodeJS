const sequelize = require('sequelize');
const database = new  sequelize('PshEventos','sa','02052003',
{
    dialect:'mssql', host:'localhost',port:1433
});

database.sync();

module.exports = database;