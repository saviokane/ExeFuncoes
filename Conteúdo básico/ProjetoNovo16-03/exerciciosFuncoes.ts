export function fatorial(num: number): number{
    let num2: number = 1;
    if(num2 > 0){

    
    for(let i = 1; i <= num; i++){
        num2 = num2 * i;
    }
}else{
    num2 =1;
}
    return num2;
}

export function exponenciacao(base: number, expo: number): number{
// ou let resul = number ** expo;
    return Math.pow(base,expo);
}

export function calcPorcentagem(valor: number, perce: number): number{
    // aqui ele retorna a porcentagem
    return (perce / 100) * valor;
}

export function areaTriangulo(base: number, altura: number): number{
    let area = (base * altura) /2;
    return area;
}