const A = [ 6, 15, -8, 0, -3]; //Crear arreglo

//Definir elementos
let parn = 0;
let sum = 0;
let avg = 0;

//Repeticion
for (var i = 0; i < A.length ; i++) {
    //Comparacion
    if(A[i] >= 0) {
        e = e+1;
        sum = sum+A[i];
    } else {
        //Impresion
        console.log('Warning: Hay un valor negativo que no se promedia');
    }
}

//Proceso de promedio
avg = sum/e;

//Impresion Final
console.log('Total de la suma: ' + sum);
console.log('Número de elementos: ' + e);
console.log('El promedio de los enteros positivos es: ' + avg);