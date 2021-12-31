function concatenar(...arr) {
  let concat = [...arr];
  return concat.join("");
}

function invocarFunciones(fn) {
  let info = [...arguments];
  let data = "";
  for (let frase of info) {
    data += frase();
  }
  return data;
}

function creadorDeIncrementos(increment) {
  return function (num) {
    return num + increment;
  };
}

function invocacionUnica(fn) {
  let validar = true;
  return function () {
    if (validar) {
      validar = false;
      fn();
    }
  };
}

function objetoConClousure() {
  let obj = {};
  obj.incremento = () => 1;
  obj.incrementoPor10 = () => 10;
  obj.pedirValor = function () {
    return this.incremento() + this.incrementoPor10();
  };
  obj.cambiarValor = function (num) {
    return (this.pedirValor = function () {
      return num;
    });
  };
  return obj;
}

function ListaDeFuncionesInvitados(arr, num) {
  let newArr = [];
  for (let invitados of arr) {
    newArr.push(function (clave) {
      if (clave === num) {
        return invitados;
      } else {
        return "código secreto: invalido";
      }
    });
  }
  return newArr;
}

function armarListaDeInvitados(arr, num) {
  let listaIvitados = [];
  for (let invitado of arr) {
    listaIvitados.push(invitado(num));
  }
  return listaIvitados;
}
