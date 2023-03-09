class Alumnos {
//indicar atributos
codigo;
nombres;
nota1;
nota2;
nota3;

//Constructor
constructor(codigo,nombres,nota1,nota2,nota3) {
    this.codigo = codigo;
    this.nombres = nombres;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    } //Fin del constructor

    get promedio() {
        let promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
        return (promedio);
    }

}

let objAlumnos = new Alumnos("C001","Jymmy",20,18,16);

console.log(objAlumnos.nota1);
console.log(objAlumnos.codigo);
console.log(objAlumnos.promedio);
