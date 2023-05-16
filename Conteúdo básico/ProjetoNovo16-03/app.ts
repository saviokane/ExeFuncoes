/*Escreva um programa que apresente o seguinte menu:
1 - Fatorial
2 - Exponenciação
3 - Porcentagem
4 - Area do triângulo
5 - Sair */

import {calcPorcentagem, exponenciacao, fatorial,areaTriangulo} from "./exerciciosFuncoes";
let teclado = require("prompt-sync")();
let  opcao: number;
let x: number,y:number; 

do{
    console.log("Escreva um programa que apresente o seguinte menu: \n1 - Fatorial\n2 - Exponenciação\n3 - Porcentagem\n4 - Area do triângulo\n5 - Sair");
    opcao = teclado();
    //y = Number(y);
    //x = Number(x);
    if(opcao == 1){

        console.log("Informe o número");
        let num = teclado();
        let resultado = fatorial(num);
        console.log(`O fatorial de ${num} é: ${resultado}.`);
    }

    if(opcao == 2){
        console.log("Informe a base: ");
        let base = teclado();
        console.log("Informe o expoente: ");
        let expoente = teclado();

        let resultado = exponenciacao(base,expoente);
        console.log(`O resultado é ${resultado}.`);
    }

    if(opcao == 3){
        console.log("Informe o valor: ");
        let valor = teclado();
        console.log("Informe o percentual: ");
        let percentual = teclado();
        let resultado = calcPorcentagem(valor,percentual);
        console.log(`${percentual}% de ${valor} é: ${resultado}`);
    }

    if(opcao == 4){
        console.log("Informe a base: ");
        let base = teclado();
        console.log("Informe a altura: ");
        let altura = teclado();

        let resultado = areaTriangulo(base, altura);

        console.log(`A área do triangulo é: ${resultado}M²`);
    }

}while(opcao != 5)
