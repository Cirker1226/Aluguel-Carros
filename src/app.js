// IMPORTS Gerais

const express = require('express'); 
const conectarBanco = require('./config/database');
const clienteRouter = require('./routes/clienteRoutes');

/* ---------------------------------------------------------------- */

const app = express(); // Cria e inicializa a aplicação
const PORT = process.env.PORT; // Roda na PORTA que está no .env

app.use(express.urlencoded({ extended: true })); // Permite a coleta de dados enviados por formularios
app.use(express.json()); // Permite a leitura de dados JSON
app.use('/clientes', clienteRouter);

/* ---------------------------------------------------------------- */

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