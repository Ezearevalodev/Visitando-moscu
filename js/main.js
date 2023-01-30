$(function (){

    
    //Ocultar contenido de la web
    $("#container").css({"display":"none"});
    $("body").css({"background":"#423695 url('https://www.transparenttextures.com/patterns/axiom-pattern.png')"})

    //Añadir acción en el boton
    $("#btn").click(function(){

        $(window)

        $("body").css({"background":"#423695 url('https://www.transparenttextures.com/patterns/black-scales.png')"});
        //Ocultar Ventada de Bienvenida
        $("#welcome").css({"display":"none"});

        //Mostrar contenido de la web
        $("#container").css({"display":"block"});
    });
});
