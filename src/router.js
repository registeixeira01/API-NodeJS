const express = require('express');
const controllerEvento = require('./controllers/EventoController');

const routes = express.Router();

routes.get('/List', controllerEvento.List);

routes.post('/Create', controllerEvento.Create);

routes.post('/Update', controllerEvento.Update);

// routes.get('/GetOne', controllerEvento.GetOne);
routes.post('/GetOne', controllerEvento.GetOne); // MUDAMOS PARA POST

routes.post('/Delete', controllerEvento.Delete);

module.exports = routes;
