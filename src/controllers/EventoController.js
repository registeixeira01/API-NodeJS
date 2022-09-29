const ModelEvento = require('../models/evento');

module.exports =
{
    async List(req, res) {
         res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        try {
            const eventos = await ModelEvento.findAll();
            return res.json(eventos);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
              //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        
        try {
            const eventos = await ModelEvento.create(
                {
                   //Codigo: req.body.Codigo, // Comentado para gerar automatico
                    NomeEvento: req.body.NomeEvento, 
                    OngResponsavel: req.body.OngResponsavel,
                    Descricao: req.body.Descricao,
                    DataEvento: req.body.DataEvento,
                    DataAtualizacao: null
                }
            );
            return res.json(eventos);

        } catch (erro) {
            return console.error("Erro na Create : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const prod = await ModelEvento.findByPk(req.body.Codigo);
            if (prod) {
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date();
                await prod.save();
            }

            return res.json(prod);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const prod = await ModelEvento.findByPk(req.body.Codigo);

            return res.json(prod);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const prod = await ModelEvento.findByPk(req.body.Codigo);
            await prod.destroy();
            return res.json(prod);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}
