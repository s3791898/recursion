// Function to generate Fibonacci sequence using iteration
// returns an array containing (n) numbers from the fibonacci sequence
function fibs(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Function to generate Fibonacci sequence using recursion
// returns an array containing (n) numbers from the fibonacci sequence
function fibsRec(n, arr = [0, 1]) {
  if (n === 2) return arr;
  if (n === 1) return arr.slice(0, 1);
  if (n === 0) return [];
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n - 1, arr);
}

console.log(fibs(8));
console.log(fibsRec(1));
