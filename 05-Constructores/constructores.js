function CalculadoraNPI() {
  this.arr = [];
  this.result = 0;
}

CalculadoraNPI.prototype.agregar = agregar;
CalculadoraNPI.prototype.sumar = sumar;
CalculadoraNPI.prototype.restar = restar;
CalculadoraNPI.prototype.multiplicar = multiplicar;
CalculadoraNPI.prototype.dividir = dividir;
CalculadoraNPI.prototype.valor = Valor;

function agregar(num) {
  this.arr.push(num);
  return this.arr;
}

function sumar() {
  if (this.arr.length > 1 && this.result == 0) {
    let totalSuma = this.arr.pop() + this.arr.pop();
    this.result = totalSuma;
    return this.result;
  } else if (this.result !== 0) {
    let totalSuma = this.result + this.arr[0];
    this.result = totalSuma;
    return this.result;
  } else {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  }
}

function restar() {
  if (this.arr.length > 1) {
    let valor1 = this.arr.pop();
    let valor2 = this.arr.pop();
    let resta = valor2 - valor1;
    this.result = resta;
    return this.result;
  } else {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  }
}

function multiplicar() {
  if (this.result == 0 && this.arr.length > 1) {
    let valo1 = this.arr.pop();
    let valor2 = this.arr.pop();
    let mult = valor2 * valo1;
    this.result = mult;
    return this.result;
  } else if (this.result !== 0) {
    let valo1 = this.arr[0];
    let mult = valo1 * this.result;
    this.result = mult;
  } else {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  }
}

function dividir() {
  if (this.arr.length > 1) {
    let valo1 = this.arr.pop();
    let valor2 = this.arr.pop();
    let div = valor2 / valo1;
    this.result = div;
    return this.result;
  } else {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  }
}

function Valor() {
  return this.result;
}
