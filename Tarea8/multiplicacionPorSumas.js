var resultado = 0;

function MultiplicacionPorSumas() {
    var A = parseInt(prompt("Valor de A: "));
    var B = parseInt(prompt("Valor de B: "));
    
    while (B > 0) {
        resultado = resultado + A;
        B = B - 1;
        console.log("A: " + A);
        console.log("B: " + B);
        console.log("Resultado: " + resultado);
    }
    
    console.log("Resultado final: " + resultado);
    return resultado;
}

MultiplicacionPorSumas();
