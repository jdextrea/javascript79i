let personas = ["Jaime","Melissa","Santiago","Carlos"];
let nroElementos = personas.length;

//Metodo para contar elementos
console.log(nroElementos);

//Para acceder a un valor del arreglo 
//console.log(personas[2]);

//Mostrar todos los elementos
for (let x=0;x<nroElementos;x++) {
    console.log(personas[x]);

}

//Crear un programa que permita mostrar los paises en una sola fila
//Peru Chile Brazil Ecuador

//Invertir un arreglo de valores
let paises = ["Peru","Chile","Brazil","Ecuador"];
let paisFila = [];
let nombrePaises = "";
//nombrePaises = "Peru";
//console.log(nombrePaises);
//nombrePaises = nombrePaises + ", " + "Chile";
//console.log(nombrePaises);

//Ordenar de a-z
paises.sort();

paises.reverse();

for(let y=0 ; y<paises.length;y++) 
    {
     paisFila.unshift(paises[y]);
        nombrePaises = nombrePaises  + " " + paises[y];
    }

    console.log(paisFila);
    console.log(nombrePaises);
