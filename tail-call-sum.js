"use strict";

// Sumatoria en forma Tail Recursive
const tailCallSum = (n, acc) => {
  if (n == 0) return acc;
  else return tailCallSum(n-1, acc + n);
};


// No hay problemas
console.log(tailCallSum(10, 0));

// Corriend node ptc.js
// RangeError: Maximum call stack size exceeded
console.log(tailCallSum(16000, 0));
