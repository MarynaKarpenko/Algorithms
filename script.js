/* Описать блок-схему и написать функцию с тестами к ней, 
которая вычисляет среднее арифметическое всех чисел преданных в качестве аргумента.*/

/* average([1,2,3,4,5]) -> 3

Блок-схему
Написать функцию
Протестировать её */

function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  console.log(fib(3));
  
  function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  const n = 3; 
  const result = fibonacci(n);
  console.log(`Число Фибоначчи для n = ${n} равно ${result}`);