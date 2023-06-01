const Cliente = require("../model/ClienteModel");
const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

// configurando ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Metodo usando handlebar, porem ao return res.render('formulario');
não estava sendo encontrado o arquivo 'formulario' 
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
*/

// retornando o body-parser

const bodyParser = require('body-parser');
const { off } = require('process');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


module.exports = {

    
    async formulario (req,res){
       const filePath = path.join(__dirname,'../views/formulario.html')

       fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return res.status(500).send('Arquivo não foi encontrado.');
        }
        res.set('Content-Type', 'text/html');
        res.send(data);
      });
    },

    async menu (req,res){
        const filePath = path.join(__dirname,'../views/index.html')
 
        fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
           console.error('Erro ao ler o arquivo:', err);
           return res.status(500).send('Arquivo não foi encontrado.');
         }
         res.set('Content-Type', 'text/html');
         res.send(data);
       });
     },

    async register (req,res){
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        
        const clienteCreate = await Cliente.create ({
            nome,
            cpf,
            email,
            telefone,
            fidelidade
        });
            console.log("Cliente novo criado: ",clienteCreate.nome+" !!!");
            
            res.redirect('menu');
    },

    async listClients(req, res) {
        try {
          const clientes = await Cliente.find({});
          res.render('clientes', { clientes });
        } catch (error) {
          console.error("Erro ao listar os clientes:", error);
          res.status(500).send("Erro ao listar os clientes");
        }
      }
}


// metodo usando html in-line JS
/*
    async cadastro (req,res){
        const html = 
        `<html>
        <body>
            <form action="/add" method="post">
                <p>Nome: </p>
                <input type="text" name="nome">
                <p>CPF: </p>
                <input type="text" name="" id="cpf">
                <p>Email: </p>
                <input type="text" name="email">
                <p>Fidelidade: </p>
                <input type="checkbox" id="fidelizado" name="fidelidade"><br>
                <input type="submit" name="Enviar">
            </form>
        </body>
        </html>`;
    return res.send(html);   
},*/



// tentativa para retornar as clientes do banco de dados, perguntar ao prof.
    /*async read(req,res){
        const clienteList = await Cliente.find();

            return res.send("Nome: "+clienteList.nome);
           
    }
    */

    // tentativa de criar menu
    /*async home (req,res){
        const filePath = path.join(__dirname,'../views/index.html')

        fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
           console.error('Erro ao ler o arquivo:', err);
           return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
         }
         res.set('Content-Type', 'text/html');
         res.send(data);
       });
    },*/