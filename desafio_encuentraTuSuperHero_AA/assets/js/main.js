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

const total_hero = 731; //cantidad de heroes en el API

$(document).ready(function() {
    $('#button').click(function(e) {
        e.preventDefault();
        var user_search = $("#searchID").val();
        console.log(user_search)
        if (allowed_search(user_search)) {
            if (user_search <= total_hero) {
                console.log("son números y puedo buscar");
                $("#search_help").hide();
                $.ajax({
                    type: "GET",
                    url: "https://superheroapi.com/api.php/10161418912123747/" + user_search,
                    dataType: "json",
                    success: function(datosApi) {
                        console.log(datosApi.name);
                        search_image = datosApi.image["url"];
                        $("#hero_image").attr("src", search_image);
                        $("#hero_name").text(datosApi.name);
                        $("#hero_fullName").text(datosApi.biography['full-name']);
                        $("#hero_alias").text(datosApi.biography.aliases);
                        $("#hero_job").text(datosApi.work.occupation);
                        $("#hero_race").text(datosApi.appearance.race);
                        $("#hero_conections").text(datosApi.connections['group-affiliation']);
                        var hero_powers = [];
                        $.each(datosApi.powerstats, (index, value) => {
                            console.log(`poderes ${index} - ${value}`)
                            hero_powers.push({
                                y: value,
                                name: index
                            })
                            console.log(hero_powers)
                        })
                        var chart = new CanvasJS.Chart("chartContainer", {
                            exportEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: "Estadísticas de poder para " + datosApi.name
                            },
                            legend: {
                                cursor: "pointer",
                                itemclick: explodePie
                            },
                            data: [{
                                type: "pie",
                                showInLegend: true,
                                startAngle: 240,
                                toolTipContent: "{name}: <strong>{y}</strong>",
                                indexLabel: "{name} ({y})",
                                dataPoints: hero_powers
                            }]
                        });
                        chart.render();

                        function explodePie(e) {
                            if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                            } else {
                                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                            }
                            e.chart.render();

                        }
                    },
                    error: function(error) {
                        console.log("salio mal la llamada al API")
                    },
                });
                $("#content").show();
            } else {
                alert("Héroe no existe en la lista. El número debe ser menor o igual a " + total_hero)
            }
        } else {
            console.log("debes ingresar solo numeros");
            $("#search_help").show();
        }
    });
});