"use strict";
exports.__esModule = true;
exports.areaTriangulo = exports.calcPorcentagem = exports.exponenciacao = exports.fatorial = void 0;
function fatorial(num) {
    var num2 = 1;
    if (num2 > 0) {
        for (var i = 1; i <= num; i++) {
            num2 = num2 * i;
        }
    }
    else {
        num2 = 1;
    }
    return num2;
}
exports.fatorial = fatorial;
function exponenciacao(base, expo) {
    // ou let resul = number ** expo;
    return Math.pow(base, expo);
}
exports.exponenciacao = exponenciacao;
function calcPorcentagem(valor, perce) {
    var resul1 = (valor * 100) / 100; // aqui ele retorna a porcentagem
    var resul2 = valor + resul1;
    return resul2;
}
exports.calcPorcentagem = calcPorcentagem;
function areaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
}
exports.areaTriangulo = areaTriangulo;
