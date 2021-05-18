$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        /* Esto guarda el valor del h ref de la etiqueta a */
        var gato=this.hash;
        $("html").animate({
            /* Le resto el tamaño en pixeles de mi navbar */
            scrollTop: $(gato).offset().top - 86
        },
        /* Tiempo en ms */
        800
        );
    });
    /* Sentencia para tooltip */
    $('[data-toggle="tooltip"]').tooltip()
    /* Sentencia para el popover */
    $('[data-toggle="popover"]').popover()
});