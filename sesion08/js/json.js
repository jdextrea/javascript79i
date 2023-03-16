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


