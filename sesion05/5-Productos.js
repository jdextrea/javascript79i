class Productos {
    //Atributos
    codigoPro;
    nomPro;
    precioPro;
    canPro;
    stockMinPro;
    stockMaxPro;
    fechaVencimiento;

    //constructor
    constructor () {
        this.codigoPro="p001";
        this.nomPro ="Teclado";
        this.precioPro=20;
        this.canPro=10;
        this.stockMinPro=5;
        this.stockMaxPro=20;
        this.fechaVencimiento="2023/10/01";
            
    }
    //Crear un metodo para obtener el nombre del producto
    //get : obtener 
    //set : fijar
    get getnomPro () {
        return this.nomPro;

    }

    get getcanPro () {
    return this.canPro; 

    }

    //calcular el precio de un producto
    calcularPrecioProducto(precio,cant) {
        this.canPro = cant;
        this.precioPro = precio;
        return (this.canPro*this.precioPro);

    }

}

//Instanciar el objeto
const objProducto = new Productos();
objProducto.canPro=2;
objProducto.precioPro=20;
console.log(objProducto.precioPro);
console.log(objProducto.calcularPrecioProducto(objProducto.precioPro,objProducto.canPro));
//console.log("hola");

const objProducto2 = new Productos();
console.log("Stock maximo "   + objProducto2.stockMaxPro);