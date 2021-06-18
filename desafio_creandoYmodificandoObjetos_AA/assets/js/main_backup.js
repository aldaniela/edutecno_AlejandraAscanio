//funcion constructora para Consultorio
function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente || [];
};
//Para mostrar la informacion de todos los pacientes del consutorio
Consultorio.prototype.getPacientes = function() {
    return this.paciente;
};
//Para obtener cada dato del paciente por separado
Consultorio.prototype.getNombre = function(i) {
    return this.paciente[i].nombre;
};
Consultorio.prototype.getEdad = function(i) {
    return this.paciente[i].edad;
};
Consultorio.prototype.getRut = function(i) {
    return this.paciente[i].rut;
};
Consultorio.prototype.getDiagnostico = function(i) {
    return this.paciente[i].diagnostico;
};
//para agregar pacientes al consultorio
Consultorio.prototype.setPacientes = function(paciente) {
    this.paciente.push(paciente);
};
//funcion constructora para Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}
//Para modificar datos del paciente
Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
}
Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
}
Paciente.prototype.setRUT = function(rut) {
    this.rut = rut;
}
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this.diagnostico = diagnostico;
};
//Carga previa de datos para prueba
var pac1 = new Paciente("Daniela", 37, "26155264-7", "tos");
var pac2 = new Paciente("Maria", 70, "27119327-0", "asma");
var pac3 = new Paciente("Pedro", 35, "45879632-8", "gripe");
var consu1 = new Consultorio("Odontologia", [pac1, pac2]);
console.log(consu1.getPacientes());
consu1.setPacientes(pac3);
console.log(consu1.getPacientes());
pac1.setNombre("Alejandra");
pac2.setEdad(73);
pac3.setRUT("75321548-7");
pac1.setDiagnostico("catarro");
consu1.paciente[1].setNombre("Nuevo Nombre")
console.log(consu1.getNombre(1))
consu1.nombre = "Otro consultorio";
console.log(`Nombre del consultorio es: ${consu1.nombre}`)


//Verificar que el formunlario para agregar no esté vacio
var validar_form = (nombre, edad, rut, diagnostico) => {
    if (nombre == "" || edad == "" || rut == "" || diagnostico == "") {
        return false;
    } else {
        return true;
    }
}


$(document).ready(function() {
    //Identificar el consultorio
    $("#consultorio").text(`Consultorio de ${consu1.nombre}`);
    //Accion para ingresar un paciente
    $('#button').click(function(e) {
        e.preventDefault();
        let nombre = $("#nombre").val();
        let edad = $("#edad").val();
        let rut = $("#rut").val();
        let diagnostico = $("#diagnostico").val();
        if (validar_form(nombre, edad, rut, diagnostico)) {
            let nuevo_paciente = new Paciente(nombre, edad, rut, diagnostico);
            consu1.setPacientes(nuevo_paciente);
        } else {
            alert("El formulario debe estar completo.")
        }
    });
    //accion para buscar los datos de un paciente
    $('#buscar').click(function(e) {
            e.preventDefault();
            let nombre_buscar = $("#nombre_buscar").val();
            console.log("El nombre a buscar " + nombre_buscar)
            for (i = 0; i < consu1.paciente.length; i++) {
                if (nombre_buscar == consu1.getNombre(i)) {
                    $('#t2_fila1').html(`<td>${consu1.getNombre(i)}</td><td>${consu1.getEdad(i)}</td><td>${consu1.getRut(i)}</td><td>${consu1.getDiagnostico(i)}</td>`);
                    $("#resultado").text("");
                    i = consu1.paciente.length; //Para poder salir del for
                } else {
                    $('#t2_fila1').html(`<td></td><td></td><td></td><td></td>`);
                    $("#resultado").text("Paciente no encontrado");
                }
            }
        })
        //accion para listar todos los pacientes
    $('#listar').click(function(e) {
        e.preventDefault();
        var j = 1;
        for (i = 0; i < consu1.paciente.length; i++) {
            $('#fila' + j).html(`<td>${consu1.getNombre(i)}</td><td>${consu1.getEdad(i)}</td><td>${consu1.getRut(i)}</td><td>${consu1.getDiagnostico(i)}</td>`);
            $('#body_tabla').append('<tr id="fila' + (j + 1) + '"></tr>');
            j++;
        }
    });
});