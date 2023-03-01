// 01 Duck Typing
// source: http://en.wikipedia.org/wiki/Duck_typing#In_JavaScript

var Pato = function(){
    this.quack
    this.quack = function(){console.log('Quaaaaaack!');};
    this.plumas = function(){console.log('El pato tiene plumas grises y blancas.');};
    return this;
};
 
var Persona = function(){
    this.quack = function(){console.log('La persona imita al pato.');};
    this.plumas = function(){console.log('La persona recoge una pluma del suelo y la muestra.');};
    this.nombre = function(){console.log('Pedro Donald');};
    return this;
};
 
var en_el_bosque = function(duck){
    duck.quack();
    duck.plumas();
};
 
var init = function(){
    var donald = new Pato();
    var pedro = new Persona();
    en_el_bosque(donald);
    en_el_bosque(pedro);
};
 
init();