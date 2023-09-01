var numeros = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];

var min = numeros[0];

/* // Enlista todos los valores del arreglo
numeros.forEach(function(numero) {
    console.log(numero);
});*/

for (var i = 0; i < numeros.length ; i++) {
    
    if (numeros[i] < min) {
// "registro de comparaciones de valores mínimos"
// console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + numeros[i]);
        min = numeros[i];
    }
}
let pos = numeros.indexOf(min);
console.log("tamaño del arreglo: " + numeros.length)
console.log("posicion del valor minimo: " + (pos+1));
console.log('Valor mínimo: ' + min);