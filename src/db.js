const sequelize = require('sequelize');
const database = new  sequelize('DB-PSH-EVENTOS','Regishas01','02052003',
{
    dialect:'mssql', host:'DB-PSH-EVENTOS.mssql.somee.com'
});

database.sync();

module.exports = database;