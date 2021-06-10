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
}]

console.log(radiologia)
document.write(`Primera atención: ${radiologia[0].paciente}-${radiologia[0].prevision}|Última atención: ${radiologia[radiologia.length-1].paciente} | ${radiologia[radiologia.length - 1].prevision}`)

//Recorrer la tabla

for (let fila of radiologia) {
    document.write(`<br>${Object.entries(fila)}`)
}