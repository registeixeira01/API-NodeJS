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
        OngResponsavel:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        },
        DataEvento:
        {
            type: sequelize.DATE,
            allowNull: true,
        },
        DataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true,  
        }
    },
    {
        sequelize: database, modelName: 'tbEvento', shema
    }
)

module.exports = Evento;