const express = require("express");
const app = express();
const rotas = require("./rotas");


app.use(express.json());
app.use(rotas);
require("./config/dbconfig.js");

app.listen(8081);
