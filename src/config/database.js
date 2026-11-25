const mongoose = require('mongoose');

async function conectarAoBanco() {
    await mongoose.connect(process.env.MONGODB_URI); // Responsavel por conectar ao mongoDB do Atlas
    console.log(`MongoDB conectado ao banco de dados!`);
}

module.exports = conectarAoBanco