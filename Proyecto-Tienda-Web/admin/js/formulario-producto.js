const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
}

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false

}
//Funciones Lambda
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add('is-valid');
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}

   const validarFormulario = (e) => {
        switch (e.target.name) {
            case "inputProducto":
                validarCampo(expresiones.inputProducto,e.target,'inputProducto');
            break;
            case "inputModelo":
                validarCampo(expresiones.inputModelo,e.target,'inputModelo');
            break;
            case "inputDetalle":
                validarCampo(expresiones.inputDetalle,e.target,'inputDetalle');
            break;
            case "inputPeso":
                validarCampo(expresiones.inputPeso,e.target,'inputPeso');
            break;
            case "inputMaterial":
                validarCampo(expresiones.inputMaterial,e.target,'inputMaterial');
            break;
            case "inputStock":
                validarCampo(expresiones.inputStock,e.target,'inputStock');
            break;
        }
   } 


//Funcion para recorrer todos los input foreach
inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
    
});