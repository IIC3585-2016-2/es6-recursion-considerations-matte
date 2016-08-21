const trampoline = (fn) => {
  while (typeof fn === 'function') {
    fn = fn();
  }
  return fn;
};

// Si n =< 1 retorna un numero, si no retorna una funcion
const sum = (n, acc) => () => {
  if (n <= 1) return acc;
  else return sum(n-1, acc + n);
};


// No hay problemas
console.log(trampoline(sum(10, 0)));

// No hay problemas tampoco! :D
console.log(trampoline(sum(160000, 0)));
