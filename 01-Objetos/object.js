function setPropsOnObj(obj) {
  obj.p = 5;
  obj.plataforma = 5;
  (obj.proximo = function (num) {
    return num + 1;
  }),
    (obj.la = { clave: { secreta: { es: 404 } } });

  return obj;
}

function setPropsOnArr(arr) {
  arr.hola = function () {
    return "Hola!";
  };
  arr.river = "plate";
  arr[0] = 5;
  arr.doble = (num) => num + num;
  return arr;
}

function setPropsOnFunc(fn) {
  let date = new Date();
  fn.year = date.getFullYear();
  fn.mitad = (num) => num / 2;
  fn.prototype.helloWorld = () => "Hello World";
  return fn();
}
