function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

const result = fibonacci(10);
console.log(result);
  


function fibonacciIterative(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = fibPrev + fibCurrent;
      fibPrev = fibCurrent;
      fibCurrent = next;
    }
  
    return fibCurrent;
}
 
const result2 = fibonacciIterative(10);
console.log(result2);  
  


function fibonacciRecursive(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  }
  
  const n10Recursive = 10;
  const n20Recursive = 20;
  const n30Recursive = 30;
  
  console.log(`Рекурсивный метод:`);
  console.log(`Fib(${n10Recursive}) = ${fibonacciRecursive(n10Recursive)}`);
  console.log(`Fib(${n20Recursive}) = ${fibonacciRecursive(n20Recursive)}`);
  console.log(`Fib(${n30Recursive}) = ${fibonacciRecursive(n30Recursive)}`);
  

  function fibonacciIterative(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    const next = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = next;
  }

  return fibCurrent;
}

const n10Iterative = 10;
const n20Iterative = 20;
const n30Iterative = 30;

console.log(`Итеративный метод:`);
console.log(`Fib(${n10Iterative}) = ${fibonacciIterative(n10Iterative)}`);
console.log(`Fib(${n20Iterative}) = ${fibonacciIterative(n20Iterative)}`);
console.log(`Fib(${n30Iterative}) = ${fibonacciIterative(n30Iterative)}`);


function fibonacciIterative(n, iterations = 0) {
    if (n <= 0) {
      return [0, iterations];
    } else if (n === 1) {
      return [1, iterations];
    }
  
    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = fibPrev + fibCurrent;
      fibPrev = fibCurrent;
      fibCurrent = next;
      iterations++;
    }
  
    return [fibCurrent, iterations];
  }
  
  const n = 10;
  const [fibResult, loopIterations] = fibonacciIterative(n);
  console.log(`Fib(${n}) = ${fibResult}`);
  console.log(`Количество итераций цикла: ${loopIterations}`);