let persona = '{"codigo":"c01","correo":"jdextre@certus.edu.pe","clave":"1234"}';
//Parse convierte una cadena a un objeto de javascript
const objPersona = JSON.parse(persona);

console.log(objPersona.codigo);
console.log(objPersona.correo);
console.log(objPersona.clave);

//Agregar un arreglo de notas
let personaNotas = '{"codigo":"c01","correo":"jdextre@certus.edu.pe","clave":"1234","notas":[12,15]}';
//Parse convierte una cadena a un objeto de javascript
const objPersonaNotas = JSON.parse(personaNotas);
let n1 = objPersonaNotas.notas[0];
console.log(n1);

//Trabajar con una tabla con un registro
let Usuarios = '{"Usuarios":[{"codigo":"c01","correo":"jdextre@certus.edu.pe","clave":"1234","notas":[12,15]},' +  
                '{"codigo":"c02","correo":"mvela@certus.edu.pe","clave":"4694","notas":[15,12]},' + 
                '{"codigo":"c03","correo":"avelasquez@certus.edu.pe","clave":"1234","notas":[18,20]}]}';

const objUsuarios = JSON.parse(Usuarios);

//for (let x=0;x<=)
console.log(objUsuarios.Usuarios[1].correo);

//Convertir un objeto en JSON
let usuarioSinComillas = {codigo:"c01",nombre:"jymmy",clave:"1234"};
const usuarioJson = JSON.stringify(usuarioSinComillas);
console.log(usuarioJson);

