"use strict";
/*Escreva um programa que apresente o seguinte menu:
1 - Fatorial
2 - Exponenciação
3 - Porcentagem
4 - Area do triângulo
5 - Sair */
exports.__esModule = true;
var exerciciosFuncoes_1 = require("./exerciciosFuncoes");
var teclado = require("prompt-sync")();
var opcao;
var x, y;
do {
    console.log("Escreva um programa que apresente o seguinte menu: \n1 - Fatorial\n2 - Exponenciação\n3 - Porcentagem\n4 - Area do triângulo\n5 - Sair");
    opcao = teclado();
    //y = Number(y);
    //x = Number(x);
    if (opcao == 1) {
        console.log("Informe o número");
        var num = teclado();
        var resultado = (0, exerciciosFuncoes_1.fatorial)(num);
        console.log("O fatorial de ".concat(num, " \u00E9: ").concat(resultado, "."));
    }
    if (opcao == 2) {
        console.log("Informe a base: ");
        var base = teclado();
        console.log("Informe o expoente: ");
        var expoente = teclado();
        var resultado = (0, exerciciosFuncoes_1.exponenciacao)(base, expoente);
        console.log("O resultado \u00E9 ".concat(resultado, "."));
    }
    if (opcao == 3) {
        console.log("Informe o valor: ");
        var valor = teclado();
        console.log("Informe o percentual: ");
        var percentual = teclado();
        var resultado = (0, exerciciosFuncoes_1.calcPorcentagem)(valor, percentual);
        console.log("".concat(percentual, "% de ").concat(valor, " \u00E9: ").concat(resultado));
    }
    if (opcao == 4) {
        console.log("Informe a base: ");
        var base = teclado();
        console.log("Informe a altura: ");
        var altura = teclado();
        var resultado = (0, exerciciosFuncoes_1.areaTriangulo)(base, altura);
        console.log("A \u00E1rea do triangulo \u00E9: ".concat(resultado, "M\u00B2"));
    }
} while (opcao != 5);
