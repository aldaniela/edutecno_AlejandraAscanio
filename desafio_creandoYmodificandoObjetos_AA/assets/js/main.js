function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente || [];
};

Consultorio.prototype.getPacientes = function() {
    return this.paciente;
};

Consultorio.prototype.setPacientes = function(paciente) {
    this.paciente.push(paciente);
};

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}


var pac1 = new Paciente("Daniela", 37, "26155264-7", "tos");
var pac2 = new Paciente("Maria", 70, "27119327-0", "asma");
var pac3 = new Paciente("Pedro", 35, "45879632-8", "gripe");
var consu1 = new Consultorio("Odontologia", [pac1, pac2]);
console.log(consu1.getPacientes());
consu1.setPacientes(pac3);
console.log(consu1.getPacientes());


//Aquí creamos nuestro div container principal
document.write("<div class='container'>");
document.write("<h2>Listado general de pacientes atendidos</h2>");
//Aquí creamos nuestra tabla con bootstrap para el listado de Pacientes
document.write("<table class='table table-bordered'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-info text-white'>");
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Nombre</th>");
document.write("<th scope='col'>Edad</th>");
document.write("<th scope='col'>RUT</th>");
document.write("<th scope='col'>Diagnostico</th>");
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla
document.write("<tbody>");
for (i = 0; i < consu1.paciente.length; i++) {
    document.write("<tr>");
    document.write(`<td>${consu1.paciente[i].nombre}</td>`)
    document.write(`<td>${consu1.paciente[i].edad}</td>`)
    document.write(`<td>${consu1.paciente[i].rut}</td>`)
    document.write(`<td>${consu1.paciente[i].diagnostico}</td>`)
    document.write("</tr>");
}
//Aqui cerramos el cuerpo de la tabla
document.write("</tbody>");
//Aqui cerramos la tabla
document.write(`</table>`)