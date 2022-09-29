const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Evento extends sequelize.Model { }


Evento.init(
    {
        Codigo:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        NomeEvento:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        OngResponsavel:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        DataEvento:
        {
            type: sequelize.DATEONLY,
            allowNull: true,
        },
        DataAtualizacao:
        {
            type: sequelize.DATEONLY,
            allowNull: true,  
        }
    },
    {
        sequelize: database, modelName: 'tbEvento', shema
    }
)

module.exports = Evento;