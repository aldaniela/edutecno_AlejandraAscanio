jQuery.fn.invoke_api = (searchID) => {
    console.log("Entre en mi funcion invoke")
    $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api.php/10161418912123747/" + searchID,
        dataType: "json",
        success: function(datosApi) {
            console.log(datosApi.name);
            search_image = datosApi.image["url"];
            $("#hero_image").attr("src", search_image);
            $("#hero_name").text(datosApi.name);
            $("#hero_fullName").text(datosApi.biography.full - name);
            $("#hero_alias").text(datosApi.biography.aliases);
            $("#hero_job").text(datosApi.work.occupation);
        },
        error: function(error) {
            //si algo sale mal, se agrega la funcionalidad aquí.
        },
    });
    $("#content").show();
};