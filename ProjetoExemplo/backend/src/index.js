const express = require("express");
const app = express();

require("./config/dbconfig.js");

app.use(express.json());

app.get("/", (req, res) =>{
    // return res.send("Teste de rota...");
    return res.json({
        nome: "Edu",
        idade: 20,
        sexo: "Feminino",
        salario: 1000

    })
});

app.listen(8081);
