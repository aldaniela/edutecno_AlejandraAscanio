//Crear la clase Cliente
export default class Cliente {
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