/* Ejercicio 5. Pedir al usuario 5 números. Mostrar la suma y el promedio */

var num1 = parseInt(prompt("Ingrese el primer número: "));
var num2 = parseInt(prompt("Ingrese el segundor número: "));
var num3 = parseInt(prompt("Ingrese el tercer número: "));
var num4 = parseInt(prompt("Ingrese el cuarto número: "));
var num5 = parseInt(prompt("Ingrese el quinto número: "));

var total_sum = (num1 + num2 + num3 + num4 + num5);
var promedio = total_sum / 5;

document.write("Los números ingresados son: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + " y " + num5);
document.write("<br>");
document.write("La suma es: " + total_sum);
document.write("<br>");
document.write("El promedio es: " + promedio);
document.write("<br>");