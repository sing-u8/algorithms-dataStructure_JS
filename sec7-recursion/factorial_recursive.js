function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function fib_memo() {
  let memo = [undefined, 1];
  return function fib(n) {
    if (memo[n] !== undefined) return memo[n];
    let res = n * fib(n - 1);
    memo[n] = res;
    console.log("memo[n]: ", n, ", ", memo[n]);
    return res;
  };
}
