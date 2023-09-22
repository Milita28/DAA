function separar(num, mitad) {
  // Función para dividir un número en dos partes de igual tamaño
  const numStr = String(num);
  const A = parseInt(numStr.slice(0, -mitad));
  const B = parseInt(numStr.slice(-mitad));
  return [A, B];
}

function multiplicacionKaratsuba(A, B) {
  if (A < 10 || B < 10) {
    return A * B; // Caso base: multiplicación trivial
  }

  const n = Math.max(String(A).length, String(B).length);
  const mitad = Math.floor(n / 2);

  // Dividir A y B en partes A1, A0 y B1, B0
  const [A1, A0] = separar(A, mitad);
  const [B1, B0] = separar(B, mitad);

  // Recursivamente calcular tres productos parciales
  const P1 = multiplicacionKaratsuba(A1, B1);
  const P2 = multiplicacionKaratsuba(A0, B0);
  const P3 = multiplicacionKaratsuba(A1 + A0, B1 + B0) - P1 - P2;

  // Calcular el resultado final combinando los productos parciales
  const resultado = P1 * Math.pow(10, 2 * mitad) + P3 * Math.pow(10, mitad) + P2;

  return resultado;
}

const A = parseInt(prompt("Valor de A: "));
const B = parseInt(prompt("Valor de B: "));
const resultado = multiplicacionKaratsuba(A, B);
console.log("Resultado: " + resultado);
