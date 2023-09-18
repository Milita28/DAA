// Serie de fibonacci usando concepto de recursividad
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// Pide el número de términos a avanzar
const Terminos = prompt('Ingrese el número de términos: ');

if(Terminos <=0) {
    console.log('Ingrese un número positivo');
}
else {
    for(let i = 0; i < Terminos; i++) {
        console.log(fibonacci(i));
    }
}