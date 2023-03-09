$(document).ready(function() {
    const $select = $("#miSelect");
    const opcionCambiada = () => {
        console.log("cambio");
    }

    $select.change(opcionCambiada);

    //Crear una funcion para saber la eleccion de cada elemento

    //Crear un metodo para limpiar el select
    const limpiar = () => {
        $select.empty();
    }
});