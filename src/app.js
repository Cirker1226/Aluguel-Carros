const express = require('express'); // Funciona como um IMPORT 

const app = express(); // Cria e inicializa a aplicação
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true })); // Permite a coleta de dados enviados por formularios

app.get('/', (req, res) => {
    res.send('Sistema de Aluguel de Automoveis');
});

app.listen (PORT, (e) => {
    console.log(`Servidor rodando na porta ${PORT}`);
});