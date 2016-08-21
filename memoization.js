const fibonacci = () => {
 var memo = {0:0, 1:1};
 const fib = (n) => {
   var result = memo[n];
   if (typeof result != "number") {
     result = fib(n -1) + fib(n - 2);
     memo[n] = result;
   }
   return result;
 };
 return fib;
}();

console.log(fibonacci(1000));
