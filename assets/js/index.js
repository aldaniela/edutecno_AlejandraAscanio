$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        /* Esto guarda el valor del haref de la etiqueta a */
        var gato=this.hash;
        $("html").animate({
            /* Le resto el tamaño en pixeles de mi navbar */
            scrollTop: $(gato).offset().top - 86
        },
        /* Tiempo en ms */
        800
        );
    });
});