const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);
require = require("./config/dbConfig");

app.listen(8081);

