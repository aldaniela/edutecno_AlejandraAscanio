var user_option;
var mac_option;
var user_count;

//1 es Piedra, 2 Papel, 3 es Tijera
function num_to_text(a) {
    switch (a) {
        case 1:
            return ("Piedra");
            break;
        case 2:
            return ("Papel");
            break;
        case 3:
            return ("Tijera");
            break;
    }
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
mac_option = getRandomInt(1, 4);
user_option = parseInt(prompt("Hola! Bienvenido al juego de Cachipun. Introduce 1 para Piedra, 2 para Papel y 3 para Tijera: "));

if (mac_option == user_option) {
    document.write("<br>Esto es un empate. Ambos lanzamos " + num_to_text(user_option));
} else if (mac_option == "1" && user_option == "3" || mac_option == "3" && user_option == "2" || mac_option == "2" && user_option == "1") {
    document.write("<br>Lo siento, haz perdido. Mi " + num_to_text(mac_option) + " le gana a tu " + num_to_text(user_option));
} else {
    document.write("<br>Felicidades, haz ganado. Tu " + num_to_text(user_option) + " le gana a mi " + num_to_text(mac_option));
}


/* En este apartado funciona jugar mass de una vez. Los resultados se muestran al finalizar todas las partidas */
/* user_count = parseInt(prompt("Hola! Bienvenido al juego de Cachipun. Por favor indícame cuantas veces quieres jugar: "));
for (i = user_count; i > 0; i--) {
    user_option = prompt("Inroduce 1 para Piedra, 2 para Papel y 3 para Tijera: ");
    if (mac_option == user_option) {
        document.write("<br>Esto es un empate. Ambos lanzamos " + num_to_text(user_option));;
        console.log("Esto es un empate");
    } else if (mac_option == "1" && user_option == "3" || mac_option == "3" && user_option == "2" || mac_option == "2" && user_option == "1") {
        document.write("<br>Lo siento, haz perdido. Mi " + num_to_text(mac_option) + " le gana a tu " + num_to_text(user_option));
        console.log("Lo siento, haz perdido");
    } else {
        document.write("<br>Felicidades, haz ganado. Tu " + num_to_text(user_option) + " le gana a mi " + num_to_text(mac_option));
        console.log ("Felicidades, haz ganado");
    }
} */