let validar = (event) => { //Esto valida si todo el formulario esta bien
    event.preventDefault(); //para que no borre el formulario como lo hace por defecto
    var f_nombre = document.getElementById("nombre").value;
    console.log(f_nombre);
    var f_asunto = document.getElementById("asunto").value;
    console.log(f_asunto);
    var f_mensaje = document.getElementById("mensaje").value;
    console.log(f_mensaje);
    if (validar2(f_nombre, f_asunto, f_mensaje) === 1) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
        //Como todo estaba bien, limpio el formulario
        document.getElementById("nombre").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";
    } else {
        document.querySelector(".resultado").innerHTML = "";
    }
}

let validar2 = (name, subject, message) => { //Esto valida cada campo del formulario. Si retorno=TRUE es porque todos estan bien
    const permitido = /^[a-zA-Z ]+$/gim;
    const permitido2 = /^[a-zA-Z ]+$/gim;
    const permitido3 = /^[a-zA-Z ]+$/gim;
    let retorno = 1; //retorno se vuelve false si alguno de los campos no cumple
    //Validando el nombre
    if (permitido.test(name)) { //exp_regu.test(el_string) Si cumple es true
        document.querySelector(".errorNombre").innerHTML = ""
    } else if (name === "") {
        document.querySelector(".errorNombre").innerHTML = "Debes ingresar un nombre"
        retorno = 0;
    } else {
        document.querySelector(".errorNombre").innerHTML = "Debes ingresar sólo caracteres de texto (A-Z a-z)"
        retorno = 0;
    }
    //Validando el asunto
    if (permitido2.test(subject)) { //exp_regu.test(el_string) Si cumple es true
        document.querySelector(".errorAsunto").innerHTML = ""
    } else if (subject === "") {
        document.querySelector(".errorAsunto").innerHTML = "Debes ingresar el asunto"
        retorno = 0;
    } else {
        document.querySelector(".errorAsunto").innerHTML = "Debes ingresar sólo caracteres de texto (A-Z a-z)"
        retorno = 0;
    }
    //validando el mensaje
    if (permitido3.test(message)) { //exp_regu.test(el_string) Si cumple es true
        document.querySelector(".errorMensaje").innerHTML = ""
    } else if (message === "") {
        document.querySelector(".errorMensaje").innerHTML = "Debes ingresar un mensaje"
    } else {
        document.querySelector(".errorMensaje").innerHTML = "Debes ingresar sólo caracteres de texto (A-Z a-z)"
        retorno = 0;
    }
    return retorno;
}

var enviar = document.getElementById("formulario");
enviar.addEventListener('submit', validar);