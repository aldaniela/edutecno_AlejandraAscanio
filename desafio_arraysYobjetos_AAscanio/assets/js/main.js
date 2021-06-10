var radiologia = [{
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA"
}, {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE"
}, {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE"
}, {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA"
}, {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA"
}];

var traumatologia = [{
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA"
}, {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE"
}, {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE"
}, {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE"
}, {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA"
}, {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE"
}, {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE"
}];

var dental = [{
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE"
}, {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE"
}, {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA"
}, {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA"
}, {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA"
}, {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE"
}];

//Aquí creamos nuestro div container principal
document.write("<div class='container'>");
document.write("<h2>Atención radiología</h2>");
document.write(`<p>Primera atención: ${radiologia[0].paciente}-${radiologia[0].prevision}|Última atención: ${radiologia[radiologia.length-1].paciente} | ${radiologia[radiologia.length - 1].prevision}</p>`);
//Aquí creamos nuestra tabla con bootstrap para Radiología
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Hora</th>");
document.write("<th scope='col'>Especialista</th>");
document.write("<th scope='col'>Paciente</th>");
document.write("<th scope='col'>RUT</th>");
document.write("<th scope='col'>Prevision</th>");
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla
document.write("<tbody>");
for (i = 0; i < radiologia.length; i++) {
    document.write("<tr>");
    document.write(`<td>${radiologia[i].hora}</td>`)
    document.write(`<td>${radiologia[i].especialista}</td>`)
    document.write(`<td>${radiologia[i].paciente}</td>`)
    document.write(`<td>${radiologia[i].rut}</td>`)
    document.write(`<td>${radiologia[i].prevision}</td>`)
    document.write("</tr>");
}
//Aqui cerramos el cuerpo de la tabla
document.write("</tbody>");
//Aqui cerramos la tabla
document.write(`</table>`)

//Ahora mostramos la segunda informacion sobre Traumatologia
document.write("<h2>Atención Traumatologia</h2>");
document.write(`<p>Primera atención: ${traumatologia[0].paciente}-${traumatologia[0].prevision}|Última atención: ${traumatologia[traumatologia.length-1].paciente} | ${traumatologia[traumatologia.length - 1].prevision}</p>`);
//Aquí creamos nuestra tabla con bootstrap para Radiología
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Hora</th>");
document.write("<th scope='col'>Especialista</th>");
document.write("<th scope='col'>Paciente</th>");
document.write("<th scope='col'>RUT</th>");
document.write("<th scope='col'>Prevision</th>");
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla
document.write("<tbody>");
for (i = 0; i < traumatologia.length; i++) {
    document.write("<tr>");
    document.write(`<td>${traumatologia[i].hora}</td>`)
    document.write(`<td>${traumatologia[i].especialista}</td>`)
    document.write(`<td>${traumatologia[i].paciente}</td>`)
    document.write(`<td>${traumatologia[i].rut}</td>`)
    document.write(`<td>${traumatologia[i].prevision}</td>`)
    document.write("</tr>");
}
//Aqui cerramos el cuerpo de la tabla
document.write("</tbody>");
//Aqui cerramos la tabla
document.write(`</table>`)


//Ahora mostramos la tercera informacion sobre Dental
document.write("<h2>Atención Dental</h2>");
document.write(`<p>Primera atención: ${dental[0].paciente}-${dental[0].prevision}|Última atención: ${dental[dental.length-1].paciente} | ${dental[dental.length - 1].prevision}</p>`);
//Aquí creamos nuestra tabla con bootstrap para Radiología
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Hora</th>");
document.write("<th scope='col'>Especialista</th>");
document.write("<th scope='col'>Paciente</th>");
document.write("<th scope='col'>RUT</th>");
document.write("<th scope='col'>Prevision</th>");
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla
document.write("<tbody>");
for (i = 0; i < dental.length; i++) {
    document.write("<tr>");
    document.write(`<td>${dental[i].hora}</td>`)
    document.write(`<td>${dental[i].especialista}</td>`)
    document.write(`<td>${dental[i].paciente}</td>`)
    document.write(`<td>${dental[i].rut}</td>`)
    document.write(`<td>${dental[i].prevision}</td>`)
    document.write("</tr>");
}
//Aqui cerramos el cuerpo de la tabla
document.write("</tbody>");
//Aqui cerramos la tabla
document.write(`</table>`)

//Aquí cerramos el container
document.write("</div>");