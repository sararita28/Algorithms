<h2>Dynamic Programming & Memoization</h2>
<p><b>Dynamic programming</b> is mostly just a matter of taking a recursive algorithm and finding the overlapping subproblems (that is, the repeated calls). You then cache those results for future recursive calls. <i>Alternatively,</i> you can study the pattern of the recursive calls and implement something iterative. You still "cache" previous work.</p>
<img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/what-is-the-difference-between-iteration-and-recursion-banner-b9507914affcc7de.png"/>
<p>One of the simplest examples of dynamic programming is computing the nth Fibonacci number. A good way to approach such a problem is often to implement it as a normal recursive solution, and then add the caching part.</p>
<ul>
  <li><b>Top-Down Dynamic Programming (or Memoization):</b> Instead of recomputing identical nodes from scratch every time, you can cache the results and use them later using <b>memoization</b>.</li>
  <li><b>Bottom-Up Dynamic Programming:</b> doing the same things as the recursive memoized approach, but in reverse.</li>
</ul>

---

Keep in Mind:
<ul>
  <li>Some people call top-down dynamic programming"memoization" and only use "dynamic programming" to refer to bottom-up work.</li>
  <li>Drawing the recursive calls as a tree is a great way to figure out the runtime of a recursive algorithm.</li>
</ul>
