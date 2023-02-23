/*saludar();
saludarParametro("Autor Jymmy Dextre");
let resultado = sumarValores(5,6);
saludarParametro(resultado);
*/

//funcion sin parametro
function saludar() {
console.log("Sesión 02");
}

//Funcion con parametro
function saludarParametro(msg) {
console.log(msg);

}

//Sumar dos valores
function sumarValores(n1,n2) {
return (n1+n2);
}

function elegirColor() {
    //calcular el indice
    let indice = document.getElementById('color').options.selectedIndex;
    //Calcular el valor de la lista seleccionada.
    let valor = document.getElementById('color').options[indice].text;
    //Obtener el valor de cada lista
    let color = document.getElementById('color').options[indice].value;
    
    switch(indice) {

        case 1:
            document.bgColor= color;
        break;
        case 2:
            document.bgColor=color;
            document.append("hol");
        break;
        case 3:
            document.bgColor=color;
        break;
        case 0:
            alert("seleccionar opcion correcta");
        break;
    }

}
document.getElementById('color').addEventListener("change",elegirColor);
