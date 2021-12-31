function Mamifero(nombre) {
  this.nombre = nombre;
  this.descendencia = [];
}

Mamifero.prototype.saludar = function () {
  return `Hola, mi nombre es ${this.nombre}`;
};

Mamifero.prototype.nuevoHijo = function () {
  let obj = Object();
  Object.assign(obj, { nombre: `${this.nombre} Jr` });
  this.descendencia.push(obj);
  return obj;
};

let manu = new Mamifero("hola");

Gato.prototype = Object.create(Mamifero.prototype);
Gato.prototype.constructor = Gato;

function Gato(nombre, color) {
  Mamifero.call(this, nombre);
  this.color = color;
}

Gato.prototype.nuevoHijo = function (color) {
  let obj = new Gato(this.nombre + " Jr", color);
  this.descendencia.push(obj);
  return obj;
};
