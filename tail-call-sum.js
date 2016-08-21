// Sumatoria en forma Tail Recursive
const sum = (n, acc) => {
 if (n <= 1) return acc;
 else return sum(n-1, acc + n);
};


// No hay problemas
console.log(sum(10, 0));

// Corriend node ptc.js
// RangeError: Maximum call stack size exceeded
console.log(sum(16000, 0));
