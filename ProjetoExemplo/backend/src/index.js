const express = require("express");
const app = express();


app.get("/", (req, res) =>{
    return res.send("Teste de rota...");
});
app.listen(8081);
