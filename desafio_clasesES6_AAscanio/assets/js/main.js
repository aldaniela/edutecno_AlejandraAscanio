//Crear la clase Cliente
class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto || {};
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    get impuesto() {
        return this._impuesto;
    }
    calcularImpuesto(monto_bruto_anual, deducciones) {
        return (monto_bruto_anual - deducciones) * 21 / 100;
    }
}

//Crear la clase Impuestos
class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }
    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set monto_bruto_anual(n_monto_bruto_anual) {
        this._monto_bruto_anual = n_monto_bruto_anual;
    }
    set deducciones(n_deducciones) {
        this._deducciones = n_deducciones;
    }
}

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