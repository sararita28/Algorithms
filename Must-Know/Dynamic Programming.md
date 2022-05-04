Dynamic programming is an algorithmic optimization technique that breaks down a complicated problem into smaller overlapping subproblems in a recursive manner and use solutions to the subproblems to construct solution to the original problem.

### Good potential candidates (problems) for dynamic programming: 
- The problem is recursive in nature and thus can be broken down into sub problems, and its optimal solution can be constructed from optimal solutions of the subproblems. In academic terms, this is called <em>optimal substructure</em>.
- The sub problems will usually overlap at some point (i.e the program will have to solve the same problem at least more than once).
- The problem calls for optimization (minimization/maximization)

### To solve a problem using DP. You could either :
<b>
<ul>
  <li> Use recursion and store the repeating computations using memoization : DFS + memoization a.k.a top-down</li>
  OR
  <li> implement a bottom-up approach: Try to solve subproblems first and then use their solutions to find solutions to bigger subproblems. This is normally done in a tabular form (i.e by filling up a table).</li>
</ul>
</b>

Let's showcase these 2 approaches by solving the fibonacci problem

### Recursion + Memoization:
<img src='https://algomonster.s3.us-east-2.amazonaws.com/fib.002.png' />

```
const fib = (n, memo = []) => {
  if (n == 1 || n == 2 ) return 1
  if (memo[n]) return memo[n]
  let result = fib(n-1, memo) + fib(n-2, memo)
  memo[n] = result
  return result
}
```

### Bottom-up approach:
<img src='https://algomonster.s3.us-east-2.amazonaws.com/dynamic_programming/fibonacci.png' />

```
const fib = (n) => {
  let bottomUp = new Array(n + 1).fill(0);
  (bottomUp[1] = 1), (bottomUp[2] = 1);
  for (let i = 3; i <= n; i++) bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  return bottomUp[n];
};
```
### Should I use top-down or bottom-up?

Top-down pros:
<ul>
  <li> The order of computing subproblems doesn't matter. For bottom-up, we have to fill the table in an order such that all the subproblems are solved first. For example, to fill dp[8], we have to have filled dp[6] and dp[7] first. For top-down, we can let recursion and memoization take care of the subproblems and therefore not worry about the order.</li> 
  <li> Easier to reason for partition type of problems (how many ways are there to.., splitting a string into...), just do DFS and add memoization.</li>
</ul>

Bottom-up pros:
<ul>
  <li> Easier to reason the time complexity (since it's just the time to fill the table).</li> 
  <li> No recursion, and thus no system stack overflow although not a huge concern for normal coding interviews.</li> 
</ul>
Deciding on top-down or bottom-up depends on the problem. Some types of problems are easier to reason and solve with top-down than bottom-up and vice versa.

  ### Greedy algorithm vs. Dynamic programming

With greedy, we always want to choose the best answer, while the answer with dp is not necessarily always the best. A good way to distinguish between the two is to figure out a dynamic programming solution and see if you can optimize by always picking the best answer for the dynamic programming substates.

### Divide and conquer vs. Dynamic programming

The difference between the 2 is in dynamic programming the subproblems overlap whereas in divide and conquer they don't.
