var idContenedor = document.getElementById("contenedor");
console.log(idContenedor);

var elementoUl = document.getElementsByTagName("ul");
console.log(elementoUl);

var menuClase = document.getElementsByClassName("menu");
console.log(menuClase);

var items = document.querySelectorAll(".item");
console.log(items);

var parrafo = document.getElementById("parrafo").innerHTML;
console.log(parrafo);

document.getElementById("parrafo").innerHTML = "Soy un párrafo";

document.getElementById("btnAccion").value = "Boton";
/* document.getElementById("btnAccion").type = "text"; */
document.getElementById('btnAccion').setAttribute('style', 'background-color: blue');

/* let box = document.getElementById('box');
box.addEventListener('click', function() {
    alert('click sobre la caja');
}); */

function miFuncionAlerta() {
    alert('click sobre la caja');
}
let box = document.getElementById('box');
box.addEventListener('click', miFuncionAlerta);

box.addEventListener('mouseover', function() {
    box.innerHTML = 'El puntero está por encima';
});
box.addEventListener('mouseout', function() {
    box.innerHTML = 'El puntero ya no está por encima';
});
/* Rescatando el valor de input */
var miBtn = document.getElementById("boton");
miBtn.addEventListener('click', function() {
    var texto = document.querySelector(".input-a-buscar");
    if (texto.value !== "") {
        document.querySelector(".resultado").innerHTML = "Estas buscando: " + texto.value;
        document.querySelector(".error").innerHTML = "";
    } else {
        document.querySelector(".resultado").innerHTML = "";
        document.querySelector(".error").innerHTML = "Para poder buscar debes ingresar una palabra ";
    }
});