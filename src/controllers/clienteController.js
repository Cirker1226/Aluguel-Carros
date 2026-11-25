const Cliente = require('../models/Cliente');

async function cadastrar(req, res) {
    const { nome, cpf, rg, endereco, profissao, vinculos } = req.body;
    const cliente = await Cliente.create({ nome, cpf, rg, endereco, profissao, vinculos });

    res.status(201).json(cliente);
}

async function listar(req, res) {
    const clientes = await Cliente.find();
    res.json(clientes);
}

module.exports = { cadastrar, listar };