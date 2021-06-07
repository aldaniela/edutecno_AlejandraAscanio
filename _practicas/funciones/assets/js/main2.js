let form = document.getElementById("formulario");
form.addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    var email = document.querySelector(".email");
    var password = document.querySelector(".password");
    document.querySelector(".resultado").innerHTML = `Bienvenido ${email.value}`;
    console.log(`Bienvenido ${email.value}`);
    alert("Registro exitoso");
};

/* Buscador de perros y gatos */
var buscar = document.getElementById("buscar");
buscar.addEventListener('click', validar);

function validar() {
    var animal = document.querySelector(".animal").value;
    var patron1 = /gato/i;
    var patron2 = /perro/i;
    if (animal.match(patron1) || animal.match(patron2)) {
        alert("Palabra ingresada permitida");
    } else {
        alert("La palabra ingresada no es permitida");
    }
};