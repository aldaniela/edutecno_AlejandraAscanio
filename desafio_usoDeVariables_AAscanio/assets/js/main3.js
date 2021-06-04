/* Ejercicio 4. Mostrar equivalencia en años, semanas y días */
const dur_anio = 365;
const dur_semana = 7;
var cant_anios = 0; //valor de inicio
var cant_semana = 0;
var d_convert = 0;

var dias_usuario = prompt("Ingresa una cantidad de días: ");

temp = parseInt(dias_usuario);

if (dias_usuario >= dur_anio) {
    cant_anios = Math.floor(dias_usuario / dur_anio);
    d_convert = (dias_usuario - (cant_anios * dur_anio));
} else {
    d_convert = dias_usuario;
}

if (d_convert >= dur_semana) {
    cant_semana = Math.floor(d_convert / dur_semana);
    d_convert = (d_convert - (cant_semana * dur_semana));
}


document.write("Los días ingresados son: " + dias_usuario);
document.write("<br>");
document.write("La equivalencia, es: " + cant_anios + " años " + cant_semana + " semanas " + d_convert + " dias");
document.write("<br>");