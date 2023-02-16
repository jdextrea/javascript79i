//Utilizar switch

//Crear un programa que me permita calcuar el dia de la semana
/*
1 = Lunes
2 = Martes
3 = Miercoles
4 = Jueves
5 = Viernes
6 = Sabado
7 = Domingo
*/
//Calcular el dia semana
//let 
let diaSemana = new Date().getDay();
console.log(diaSemana);
//Utilizar switch cuando voy a comparar un solo valor que tendra diferentes resultados.
let nomDia = "";
switch(diaSemana) {
    case 1 :
        nomDia="Lunes";
        break;
    case 2 :
            nomDia="Martes";
            break;
    case 3 :
        nomDia="Miercoles";
        break;
    default : 
        nomDia="No es un dia de semana";
        break;        

}

console.log(nomDia);