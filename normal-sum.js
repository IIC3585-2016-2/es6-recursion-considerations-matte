
// Sumatoria con recursion normal
const sum = (n) => {
  if (n < 1) return n;
  else return n + sum(n-1);
};

// No hay problemas
console.log(sum(10));

// Corriend node normal-sum.js
// RangeError: Maximum call stack size exceeded
console.log(sum(16000));
