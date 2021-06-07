//Variables con valores fijos para probar la vista
var ramo1 = "HTML"
var ramo2 = "CSS"
var ramo3 = "JavaScript"
nombre = "Alejandra"
carrera = "Electronica"
r1n1 = "2"
r1n2 = "4"
r1n3 = "2"
r2n1 = "2"
r2n2 = "4"
r2n3 = "2"
r3n1 = "2"
r3n2 = "4"
r3n3 = "2"
r3aprob = "5"
    //Definimos nuestras variables a recibir del usuario
    /* var nombre = prompt("Ingresa tu Nombre y Apellido: ");
    var carrera = prompt("Ingresa tu Carrera: ");
    var ramo1=prompt("Ingresa el nombre del primer ramo: ");
    var r1aprob=prompt("Ingresa la nota de aprobación para el ramo: "+ramo1);
    var r1n1= prompt("Ingresa la nota 1 correspondiente al ramo " + ramo1);
    var r1n2= prompt("Ingresa la nota 2 correspondiente al ramo " + ramo1);
    var r1n3= prompt("Ingresa la nota 3 correspondiente al ramo " + ramo1);
    var ramo2=prompt("Ingresa el nombre del segundo segundo ramo: ");
    var r2aprob=prompt("Ingresa la nota de aprobación para el ramo: "+ramo2);
    var r2n1= prompt("Ingresa la nota 1 correspondiente al ramo " + ramo2);
    var r2n2= prompt("Ingresa la nota 2 correspondiente al ramo " + ramo2);
    var r2n3= prompt("Ingresa la nota 3 correspondiente al ramo " + ramo2);
    var ramo3=prompt("Ingresa el nombre del tercer ramo: ");
    var r3aprob=prompt("Ingresa la nota de aprobación para el ramo: "+ramo3);
    var r3n1= prompt("Ingresa la nota 1 correspondiente al ramo " + ramo3);
    var r3n2= prompt("Ingresa la nota 2 correspondiente al ramo " + ramo3); */

//calcular el promedio para cada ramo
r1n1 = parseInt(r1n1);
r1n2 = parseInt(r1n2);
r1n3 = parseInt(r1n3);
r1p = eval((r1n1 + r1n2 + r1n3) / 3);
r1p = r1p.toFixed(2);
r2n1 = parseInt(r1n1);
r2n2 = parseInt(r1n2);
r2n3 = parseInt(r1n3);
r2p = eval((r2n1 + r2n2 + r2n3) / 3);
r2p = r2p.toFixed(2);

//Calcular nota necesaria para aprobar con 4 Ramo 3
r3n3 = eval(("3" * r3aprob) - r3n1 - r3n2);
r3n3 = r3n3.toFixed(2);
r3n1 = parseInt(r3n1);
r3n2 = parseInt(r3n2);
r3n3 = parseInt(r3n3);
r3p3 = eval((r3n1 + r3n2 + r3n3) / 3);

//Aquí creamos nuestro div container principal
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");
document.write("<p>Nombre:  " + nombre + "</p>");
document.write("<p>Carrera:  " + carrera + "</p>");
//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna - Primer Ramo
document.write("<tbody>");
document.write("<tr>");
document.write("<td>" + ramo1 + "</th>");
document.write("<td>" + r1n1 + "</td>");
document.write("<td>" + r1n2 + "</td>");
document.write("<td>" + r1n3 + "</td>");
document.write("<td>" + r1p + "</td>");
document.write("</tr>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna - Segundo Ramo
document.write("<tr>");
document.write("<td>" + ramo2 + "</th>");
document.write("<td>" + r2n1 + "</td>");
document.write("<td>" + r2n2 + "</td>");
document.write("<td>" + r2n3 + "</td>");
document.write("<td>" + r2p + "</td>");
document.write("</tr>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna - Tercer Ramo
document.write("<tr>");
document.write("<td>" + ramo3 + "</th>");
document.write("<td>" + r3n1 + "</td>");
document.write("<td>" + r3n2 + "</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr>");
document.write("</tbody>");
//Aquí cerramos nuestra tabla
document.write("</table");
//Aqui agregamos un comentario final, que debería aparecer después de la tabla
document.write("<p>Para aprobar el ramo " + ramo3 + " con nota " + r3aprob + ", necesitas obtener un " + r3n3 + " en la nota 3.</p>");
console.log("Llego hasta aquí, pero aun no veo el texto donde quiero")
    //Aquí cerramos nuestro div container principal

document.write("</div>");