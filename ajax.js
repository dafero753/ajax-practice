console.log('Que mas pues')

//captura personajes 

$('#btn-personajes').click(function(){
    console.log('hizo click en personajes')

    //consultar personajes
    consultarPersonajes()

    console.log('siguiente linea')
})

// capturar evento click favoritos
$('#btn-favoritos').click(function(){
    console.log('hizo click en favoritos')

    //ocultar contenedor de personajes

    //mostrar el contenedor de favoritos
})

function consultarPersonajes(){
    $.ajax({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character/'
    })
    .done(function(respond){
        console.log('*****llego respuesta', respond)
        var personajes = respond.results

        //recorrer los personajes

        for(var personaje of personajes){
            console.log('personaje', personaje)
            $(".contenedor-personajes").append(
                rederizarPersonaje(personaje)
            )
        }
    })
    .fail(function(error){
        console.log('hubo un error', JSON.parse(error.responseText).error)
    })
}

function rederizarPersonaje(obj_personaje){
    var personaje_html = `
    <div class= 'personaje'>
        <img src='${obj_personaje.image}'>
        <h3>${obj_personaje.name}</h3>
        <button> + Favotiros </button>
        </div>
    `   
    return personaje_html 
}
