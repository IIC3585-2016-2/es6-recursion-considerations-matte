
const trampoline = (fn) => {
  while (typeof fn === 'function') {
    fn = fn();
  }
  return fn;
};

// Si n == 0 retorna un numero,
// si no retorna una funcion
const trampolineSum = (n, acc) => () => {
  if (n == 0) return acc;
  else return trampolineSum(n-1, acc + n);
};


// No hay problemas
console.log(trampoline(trampolineSum(10, 0)));

// No hay problemas! :D
console.log(trampoline(trampolineSum(160000, 0)));
