function factorialIterativo(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorial(n) {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
}

function fib(num) {
  if (num < 2) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}

function factores(num) {
  var arr = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      arr.push(i);
      num /= i;
      factores(num);
    }
  }
  return arr;
}
