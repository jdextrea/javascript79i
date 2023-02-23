function validar() {
    //Validar si un campo tiene datos
    let correo = document.getElementById('correo').value;
    if (correo==null || correo.length==0 ) {
    alert('Faltan datos');
        return false;
    } else {

        alert('datos validados');
    }

    //Validar si un numero 
    let edad = document.getElementById('edad').value;
    if (isNaN(edad)) {
        alert('Ingresar un numero');
        return false;
    }

    
}