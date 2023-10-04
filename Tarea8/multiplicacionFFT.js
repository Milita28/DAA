function multiplicacionFFT(numero1, numero2) {
  // Representamos los números como arreglos de dígitos
  const arreglo1 = String(numero1).split('').map(Number);
  const arreglo2 = String(numero2).split('').map(Number);

  // Realizamos la multiplicación de los arreglos
  const resultado = multiplicacionPolinomial(arreglo1, arreglo2);

  // Convertimos el resultado en un número entero
  const resultadoEntero = Number(resultado.join(''));

  return resultadoEntero;
}

function multiplicacionPolinomial(arreglo1, arreglo2) {
  const longitudMaxima = Math.max(arreglo1.length, arreglo2.length);

  // Rellenamos los arreglos con ceros a la izquierda para que tengan la misma longitud
  while (arreglo1.length < longitudMaxima) {
    arreglo1.unshift(0);
  }

  while (arreglo2.length < longitudMaxima) {
    arreglo2.unshift(0);
  }

  // Iniciamos el arreglo resultado con ceros
  const resultado = new Array(2 * longitudMaxima).fill(0);

  // Realizamos la multiplicación de los arreglos como polinomios
  for (let i = longitudMaxima - 1; i >= 0; i--) {
    for (let j = longitudMaxima - 1; j >= 0; j--) {
      resultado[i + j + 1] += arreglo1[i] * arreglo2[j];
    }
  }

  // Realizamos el acarreo de manera correcta
  for (let i = resultado.length - 1; i > 0; i--) {
    if (resultado[i] >= 10) {
      const carry = Math.floor(resultado[i] / 10);
      resultado[i] %= 10;
      resultado[i - 1] += carry;
    }
  }

  // Eliminamos los ceros no significativos al principio
  let primerDigito = 0;
  while (primerDigito < resultado.length && resultado[primerDigito] === 0) {
    primerDigito++;
  }

  return resultado.slice(primerDigito);
}

// Ejemplo de uso
const numero1 = 34567;
const numero2 = 654321;
const resultado = multiplicacionFFT(numero1, numero2);
console.log(resultado); // Debe imprimir el resultado de la multiplicación
