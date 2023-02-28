//Crear un programa que brinde formato solo a los tipos text
$("input").focus(function () {

    $("[type='text'").css({"background":"red"})
});

$("input").blur(function () {

    $("[type='text'").css({"background":"green"})
});


$("#userid").blur(function () {

    $(this).css({"background":"green"})
});

//Programa para agregar texto
$("#boton3").click(function() {

    //Agregar un contenido antes
    $("#c1").before('Tomando ');

});

