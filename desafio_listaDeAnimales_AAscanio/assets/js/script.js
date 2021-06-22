//Codigo desarrollado por Alejandra Ascanio
class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del propietario es ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this._telefono}.`;
    }
}
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un ${this._tipo}`;
    }
}
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombre_mascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    }
    get nombre() {
        return this._nombre_mascota;
    }
    set nombre(nuevo_nombre_mascota) {
        this._nombre_mascota = nuevo_nombre_mascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nueva_enfermedad) {
        this._enfermedad = nueva_enfermedad;
    }
}

//Prueba de las clases
var m1 = new Mascota("Alejandra", "Tocornal", "953224413", "Perro", "Moli", "siempre tiene hambre");
console.log(m1);
console.log(m1.nombre)
console.log(m1.tipo)
console.log(m1.datosPropietario());

let agregar = document.getElementById('agregar');
agregar.addEventListener('click', function(e) {
    e.preventDefault();
    let nombre_propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombre_mascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;
    if (tipo == "perro") {
        let perro = new Mascota(nombre_propietario, direccion, telefono, tipo, nombre_mascota, enfermedad);
        document.getElementById('resultado').innerHTML = `<li>${perro.datosPropietario()}</li><li>${perro.tipo}, mientras que el 
        nombre de la mascota es: ${perro.nombre} y la enfermedad es: ${perro.enfermedad}</li>`;
    } else if (tipo == "gato") {
        let gato = new Mascota(nombre_propietario, direccion, telefono, tipo, nombre_mascota, enfermedad);
        document.getElementById('resultado').innerHTML = `<li>${gato.datosPropietario()}</li><li>${gato.tipo}, mientras que el 
        nombre de la mascota es: ${gato.nombre} y la enfermedad es: ${gato.enfermedad}</li>`;
    } else if (tipo == "conejo") {
        let conejo = new Mascota(nombre_propietario, direccion, telefono, tipo, nombre_mascota, enfermedad);
        document.getElementById('resultado').innerHTML = `<li>${conejo.datosPropietario()}</li><li>${conejo.tipo}, mientras que el 
        nombre de la mascota es: ${conejo.nombre} y la enfermedad es: ${conejo.enfermedad}</li>`;
    }
});