const express = require('express');
const clienteController = require('../controllers/clienteController');

/* ---------------------------------------------------------------- */

const clienteRouter = express.Router();

/* ---------------------------------------------------------------- */

clienteRouter.get('/', clienteController.listar);
clienteRouter.post('/', clienteController.cadastrar);

module.exports = clienteRouter;