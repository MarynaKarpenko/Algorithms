function S(n) {
  if (n == 1) return 1;
  return S(n - 1) + n;
}

console.log(S(0));

if (n <= 0) throw new Error("The number can't be negative");


// Временная сложность


//Фибоначи
function Fibonacci(n) {
  if (n <= 0) return "the number should be positive";
  if (n == 1) return 0;
  if (n == 2) return 1;
  let sum1 = 0;
  let sum2 = 1;
  let sum;
  for (let i = 3; i <= n; i++) {
    sum = sum1 + sum2;
    sum1 = sum2;
    sum2 = sum;
  }
  return sum;
}
console.log(Fibonacci(10));