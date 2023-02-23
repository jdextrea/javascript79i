function validateEmail() {
    let correo = document.getElementById('correo');
    let validarCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validarCorreo.test(correo.value)) {
        alert('Correo valido');

    } else {

        alert ('Correo invalido');
    }
}



function validar() {
    //1ra Validar si un campo tiene datos
    let correo = document.getElementById('correo').value;
    if (correo==null || correo.length==0 ) {
    //alert('Faltan datos');
    //document.getElementById('correo').style.borderColor="red";
    document.getElementById('texto').innerHTML="Ingresar nombre";
    document.getElementById('texto').style.color="red";
    document.getElementById('correo').focus();
    return false;
    } 

    //2. Validar si un numero 
    let edad = document.getElementById('edad').value;
    if (isNaN(edad)) {
        alert('Ingresar un numero');
        return false;
    }

    //3. 
    let perfil  = Number(document.getElementById('perfil').selectedIndex);
    if (perfil==0) {
        alert('Debe seleccionar un sexo');
        return false;
    } 

}