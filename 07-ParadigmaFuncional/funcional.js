function duplicar(num) {
  return num * 2;
}

function map(arr, fn) {
  arr.forEach((element, index) => {
    arr[index] = fn(element);
  });
  return arr;
}

function filter(arr, fn) {
  let newArr = [];
  arr.forEach((e) => {
    if (fn(e)) {
      newArr.push(e);
    }
  });
  return newArr;
}

/* function contains(arr, value) {
  let data = Object.keys(arr);
  let newArr = [];
  data.forEach((e) => newArr.push(arr[e]));
  return newArr.includes(value) ? true : false;
}
 */
function contains(arr, value) {
  let result = false;
  let info = Object.keys(arr);
  info.forEach((e) => {
    if (arr[e] == value) result = true;
  });
  return result;
}

function cuentaPalabras(str) {
  return typeof str == "string" ? str.split(" ").length : str;
}

function reduce(arr, init, fn) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  let palabras = fn(result, init);
  return cuentaPalabras(palabras);
}

function cuentaPalabrasReduce(str, str1) {
  let palabras = str + " " + str1;
  if (str1 == 0) {
    palabras = str;
  }
  return palabras;
}

let suma = (num) => {
  let total = reduce(num, 0, function (a, b) {
    return a + b;
  });
  return total;
};

function every(arr, fn) {
  let data = reduce(arr, 0, fn);
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  if (data === undefined) {
    return true;
  }
  return data;
}

function any(arr, fn) {
  if (arr[0] === undefined) {
    return false;
  } else {
    let data = reduce(arr, 0, fn);
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        return true;
      }
    }
    return data;
  }
}
