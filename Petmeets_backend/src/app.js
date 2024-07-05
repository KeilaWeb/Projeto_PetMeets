const express = require("express");
const userRouter = require("./router/userRouter.js");
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT = 3000;
const app = express();

// Middleware CORS deve vir antes das rotas
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para análise de JSON
app.use(bodyParser.json())

// Rota inicial
app.get("/", (req, res) => {
    res.send('<h1> Hello World</h1>');
});

// Usando rotas definidas em userRouter
app.use("/api", userRouter);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
