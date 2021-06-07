var sumar = document.getElementById("btn-sumar");
var restar = document.getElementById("btn-restar");
sumar.addEventListener("click", suma);
restar.addEventListener("click", resta);



function suma() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.querySelector(".resultado").innerHTML = num1 + num2;
}

function resta() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    let total = num1 - num2;
    if (total < 0) {
        total = 0
        alert("El resultado es negativo");
    }
    document.querySelector(".resultado").innerHTML = total;
}

/* var suma = () => {
    alert("Entrar en la suma")
    var num1 = document.getElementById("valor1").value;
    var num2 = document.getElementById("valor2").value;
    document.querySelector(".resultado").innerHTML = num1 + num2;
} */