//Importar la clase Cliente

import Cliente from "../clases/cliente.js"

//Importar la clase Impuestos
import Impuestos from "../clases/impuestos.js"

//Prueba de las clases
var i1 = new Impuestos(1500, 50);
var c1 = new Cliente("Pedro", i1);
console.log(c1.nombre);
console.log(c1);
var temp = c1.calcularImpuesto(c1.impuesto.monto_bruto_anual, c1.impuesto.deducciones);
console.log(temp);

//Creo un arreglo para guardar a todos los clientes
var clientes = [];

//leyendo los datos y calculando el impuesto
$(document).ready(function() {
    $("#calcular_impuesto").click(function(e) {
        e.preventDefault();
        let temp_nombre = $("#nombre_cliente").val();
        let temp_monto_anual = $("#monto_anual_bruto").val();
        let temp_deducciones = $("#deducciones").val();
        if (temp_nombre && temp_monto_anual && temp_deducciones) {
            let temp_impuesto = new Impuestos(temp_monto_anual, temp_deducciones);
            let nuevo_cliente = new Cliente(temp_nombre, temp_impuesto);
            clientes.push(new Cliente(temp_nombre, temp_impuesto));
            let temp_pagar = nuevo_cliente.calcularImpuesto(nuevo_cliente.impuesto.monto_bruto_anual, nuevo_cliente.impuesto.deducciones);
            $("#impuesto_pagar").text(`El impuesto a cancelar es de: ${temp_pagar}`)
            console.log(clientes);
        } else {
            alert("El formulario debe estar completo")
        }
    });
});