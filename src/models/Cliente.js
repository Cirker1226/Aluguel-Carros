const mongoose = require('mongoose');

const vinculoSchema = new mongoose.Schema({
    empregador: {type: String, required: true},
    rendimento: {type: String, required: true, min: 0},
})

const clienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    cpf: {type: String, required: true},
    rg: {type: String, required: true},
    endereco: {type: String, required: true},
    profissao: {type: String, required: true},
    vinculos: {
        type: [vinculoSchema],
    }
}, {timestamps: true}); // Gera a data e o horario que o cliente foi criado

module.exports = mongoose.model('Cliente', clienteSchema);

