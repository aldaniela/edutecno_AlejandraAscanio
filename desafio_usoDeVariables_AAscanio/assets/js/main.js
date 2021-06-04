/* Ejercicio 2. Operaciones con dos números */
var num1 = prompt("Ingresa un primer número mayor a 1:");
var num2 = prompt("Ingresa un segundo número mayor a 1:");

num1 = parseInt(num1);
num2 = parseInt(num2);

var suma = (num1 + num2);
var resta = (num1 - num2);
var mult = (num1 * num2);
var divi = (num1 / num2);
var modu = (num1 % num2);

document.write("Los números introducidos son: " + num1 + " y " + num2);
document.write("<br>");
document.write("La suma de ambos es: " + suma);
document.write("<br>");
document.write("La resta entre ambos es: " + resta);
document.write("<br>");
document.write("La multiplicación entre ambos es: " + mult);
document.write("<br>");
document.write("La división entre ambos es: " + divi);
document.write("<br>");
document.write("El módulo entra ambos es: " + modu);