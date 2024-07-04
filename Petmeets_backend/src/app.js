const express = require("express");
const userRouter = require("./router/userRouter.js");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

// Rota inicial
app.get("/", (req, res) => {
    res.send('<h1> Hello World</h1>');
});

// Middleware para análise de JSON
app.use(bodyParser.json())

// Usando rotas definidas em userRouter
app.use("/api", userRouter);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})