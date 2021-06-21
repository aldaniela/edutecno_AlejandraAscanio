//Importar la clase Cliente
import Cliente from "../fullstack-entorno/dist/cliente.js"

//Importar la clase Impuestos
import Impuestos from "../fullstack-entorno/dist/impuestos.js"

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
            console.log(clientes); //para ir viendo los clientes agregados
        } else {
            alert("El formulario debe estar completo")
        }
    });
});