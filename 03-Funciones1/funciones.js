function crearCalculadora() {
  let obj = {};
  obj.valor = function () {
    return 0;
  };

  obj.sumar = function (num) {
    let result = this.valor(num) + num;
    return (this.valor = () => result);
  };

  obj.restar = function (num) {
    let result = this.valor(num) - num;
    return (this.valor = () => result);
  };

  obj.reset = function () {
    return (this.valor = () => 0);
  };
  return obj;
}

const calc = crearCalculadora();
calc.numero = function () {
  return 10;
};
