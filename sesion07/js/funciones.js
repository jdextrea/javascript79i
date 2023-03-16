//(ArbolDom).evento(funcion)
$(document).ready(function() {
    const $select = $("#miSelect");
    
    const opcionCambiada = () => {
        console.log("cambio");
    }

    $select.change(opcionCambiada);

    //Crear una funcion para saber la eleccion de cada elemento
    const agregar = () => {
        let valor = new Date().getTime();
        $select.append($("<option>", {
            value: valor,
            text: valor
        }));
    };



    //Crear un metodo para limpiar el select
    const limpiar = () => {
        $select.empty();
    };

    //Programar los botones
   // $(document).ready(function() {
    //($arbol).evento(funcion)
    $("#btnAgregar").click(agregar);
    $("#btnLimpiar").click(limpiar);

});

