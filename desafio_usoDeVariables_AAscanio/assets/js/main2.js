/* Ejercicio 3. Convertir a grados K y F */
var temp = prompt("Ingresa la temperatura en grados C: ");

temp = parseInt(temp);

var temp_k = (temp + 273.15);
var temp_f = ((temp * 9 / 5) + 32);

document.write("La temperatura en grados C es: " + temp);
document.write("<br>");
document.write("La temperatura en grados K es: " + temp_k);
document.write("<br>");
document.write("La temperatura en grados F es: " + temp_f);