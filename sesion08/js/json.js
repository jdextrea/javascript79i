let persona = '{"codigo":"c01","correo":"jdextre@certus.edu.pe","clave":"1234"}';
//Parse convierte una cadena a un objeto de javascript
const objPersona = JSON.parse(persona);

console.log(objPersona.codigo);
console.log(objPersona.correo);
console.log(objPersona.clave);


