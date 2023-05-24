const express = require("express");
const rotas = require("./rotas");
const app = express();
const handlebars = require('express-handlebars');

// configurando body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(rotas);
require = require("./Config/dbConfig");

app.listen(8081);


