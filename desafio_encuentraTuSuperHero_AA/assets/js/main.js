var allowed_search = (data) => {
    const allowed_value = /^[0-9]+$/gim;
    if (allowed_value.test(data)) {
        console.log("Revise y el texto esta ok, puedes seguir")
        return true;
    } else {
        console.log("El texto no coincide con mi patron")
        return false;
    }
}

var invoke_api = () => {
    console.log("Entre en mi funcion invoke")
    $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api/10161418912123747/1",
        dataType: "json",
        success: function(datosApi) {
            console.log(datosApi.data);
        },
        error: function(error) {
            //si algo sale mal, se agrega la funcionalidad aquí.
        },
    });
}

$(document).ready(function() {
    $('#button').click(function(e) {
        e.preventDefault();
        let user_search = $("#searchID").val();
        console.log(user_search)
        if (allowed_search(user_search)) {
            console.log("son números y puedo buscar");
            $("#search_help").hide();
            invoke_api();
        } else {
            console.log("debes ingresar solo numeros");
            $("#search_help").show();
        }
    });
});