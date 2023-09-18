// Código para encontrar el factorial de cualquier número positivo
function factorial(x) {

    // Si piden el factorial de 0
    if (x == 0) {
        return 1;
    }

    // Si el número es positivo
    else {
        return x * factorial(x - 1);
    }
}

// Pedir el número de datos
const num = prompt('Ingrese un número positivo: ');

// llamar el factorial del número pedido
if (num >= 0) {
    const res = factorial(num);
    console.log(`El factorial de ${num} es ${res}`);
}
// En caso de que sea negativo
else {
    console.log('Ingresa un número positivo');
}