//Preguntar y validar que el número está entre el 1 y el 20
var numero;
numero = prompt("Ingresa un número entre 1 y 20: ");
while (numero < 1 || numero > 20) {
    alert("El número no está entre 1 y 20.")
    numero = prompt("Ingresa un número entre 1 y 20: ");
}

//Mostrar la tabla de multiplicar
for (let i = 1; i <= numero; i++) {
    let mult = i * numero;
    console.log(`${i} x ${numero} = ${mult}`)
}

//Funcion factorial. No se me ocurre una forma de hacer el factorial con un for anidado

var factorial = (a) => {
    let total = a;
    for (let i = 1; i < a; i++) {
        total = total * i;
    }
    return total;
}

//Mostrar el factorial hasta el numero ingresado
for (let i = 1; i <= numero; i++) {
    console.log(`El factorial de ${i} es ${factorial(i)}`)
}