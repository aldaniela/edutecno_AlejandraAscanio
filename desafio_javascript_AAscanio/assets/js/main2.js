//Funcion que cambia el color del div con el ID caja
var cambiar_color = color => document.getElementById("caja").style.backgroundColor = color;

var boton1 = document.getElementById("btn-1");
var color1 = document.getElementById("btn-1").style.backgroundColor;
boton1.addEventListener('click', function() { cambiar_color(color1) });

var boton2 = document.getElementById("btn-2");
var color2 = document.getElementById("btn-2").style.backgroundColor;
boton2.addEventListener('click', function() { cambiar_color(color2) });

var boton3 = document.getElementById("btn-3");
var color3 = document.getElementById("btn-3").style.backgroundColor;
boton3.addEventListener('click', function() { cambiar_color(color3) });

var boton4 = document.getElementById("btn-4");
var color4 = document.getElementById("btn-4").style.backgroundColor;
boton4.addEventListener('click', function() { cambiar_color(color4) });

var boton5 = document.getElementById("btn-5");
var color5 = document.getElementById("btn-5").style.backgroundColor;
boton5.addEventListener('click', () => cambiar_color(color5));

var boton6 = document.getElementById("btn-6");
var color6 = document.getElementById("btn-6").style.backgroundColor;
boton6.addEventListener('click', () => cambiar_color(color6));