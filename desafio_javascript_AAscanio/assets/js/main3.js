var sumar = document.getElementById("btn-sumar");
var restar = document.getElementById("btn-restar");

//Aqui creo mis arrow function para hacer la suma o la resta
var suma = () => {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.querySelector(".resultado").innerHTML = num1 + num2;
}
var resta = () => {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    let total = num1 - num2;
    if (total < 0) {
        total = 0
        alert("El resultado es negativo");
    }
    document.querySelector(".resultado").innerHTML = total;
}

//Aqui agrego el listener a los click de la suma y la resta
sumar.addEventListener("click", suma);
restar.addEventListener("click", resta);