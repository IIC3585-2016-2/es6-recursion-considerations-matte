
// Sumatoria con recursion normal
const normalSum = (n) => {
  if (n == 0) return 0;
  else return n + normalSum(n-1);
};

// No hay problemas
console.log(normalSum(10));

// Corriend node normal-sum.js
// RangeError: Maximum call stack size exceeded
console.log(normalSum(16000));
