Good potential candidates (problems) for dynamic programming: 
- The problem is recursive in nature and thus can be broken down into sub problems
- The sub problems will usually overlap at some point (i.e the program will have to solve the same problem at least more than once).
- The problem calls for optimization (minimization/maximization)

To solve a problem using DP. <b>You could either use Recursion and store the repeating computations using memoization OR implement a bottom-up approach.</b>

Let's showcase these 2 approaches by solving the fibonacci problem


Recursion + Memoization:
```
const fib = (n, memo = []) => {
  if (n == 1 || n == 2 ) return 1
  if (memo[n]) return memo[n]
  let result = fib(n-1, memo) + fib(n-2, memo)
  memo[n] = result
  return result
}
```
Bottom-up approach:
```
const fib = (n) => {
  if (n == 1 || n == 2) return 1;
  let bottomUp = new Array(n + 1).fill(0);
  (bottomUp[1] = 1), (bottomUp[2] = 1);
  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }
  return bottomUp[n];
};
```
