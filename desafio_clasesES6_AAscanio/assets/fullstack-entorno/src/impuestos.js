//Crear la clase Impuestos
export default class Impuestos {
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