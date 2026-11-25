const express = require('express'); // Funciona como um IMPORT 
const conectarBanco = require('./config/database');

const app = express(); // Cria e inicializa a aplicação
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true })); // Permite a coleta de dados enviados por formularios

app.get('/', (req, res) => {
    res.send('Sistema de Aluguel de Automoveis');
});

// Espera a conexão com o banco de dados para inicializar
async function iniciar() {
    await conectarBanco();
    app.listen (PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}!`);
    });
}

iniciar()