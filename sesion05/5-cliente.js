//las clases empiezan con mayuscula
//PedidoClientes
class Clientes {
    //atributos, propiedades
    codCliente;
    nomCliente;
    apeCliente;
    telCliente;
    dniCliente;
    //declaro mis atributos
    dniCliente = "66666";
    //Metodo para mostrar mensaje
    //Empieza con minuscula
    //mostrarMensaje
    mostrarMensajes() {
        console.log(this.apeCliente);
    }

}

//Paso 1 Instanciar una classe
const objClientes = new Clientes();
objClientes.nomCliente = "Jymmy";
console.log(objClientes.nomCliente);
console.log(objClientes.dniCliente);

//Paso 2 creo otro objeto
const objClientes2 = new Clientes();
objClientes2.nomCliente="Melissa";
console.log(objClientes2.nomCliente);

//Paso 3 crear mi tercer obejto
const objClientes3 = new Clientes();
objClientes3.apeCliente ="Dextre";

objClientes3.mostrarMensajes();
