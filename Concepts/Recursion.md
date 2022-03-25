<h2>Recursion</h2>
<p><b>Recursive solutions</b> are built off solutions to subproblems. Many times, this will mean <i>simply to compute f(n) by adding something, removing something, or otherwise changing the solution for f(n-1)</i>. In other cases, you might <i>solve the problem for the first half of the data set, then the second half, and then merge those results.</i></p>

<p>Recursive algorithms take at least O(n) space where n is the depth of the recursive call. All recursive problems can be implemented iteratively though they may be much more complex. The first step in solving a recursive problem is to ask yourself: what's the simplest possible input (base case)? The second step is to play around and visualize. The third step is to relate hard cases/large examples to simple cases/smaller examples.</p>

  <h3>How to:</h3>
  <p>There are many ways to divide a problem into subproblems. 3 of the most common approaches are bottom-up, top-down and half-and-half:</p>
  <ul>
    <li><b>Bottom-up:</b> often the most intuitive. We start with knowing how to solve the problem for a simple case, then 2 cases, then 3 and so on. The key here is to think about <i>how you can build the solution for one case off of the previous case (or multiple previous cases)</i>.</li>
    <li><b>Top-down:</b> more complex (since it's less concrete) but sometimes the best way to think bout the problem. Think about how we can divide the problem for case N into subproblems.</li>
    <li><b>Half-and-half:</b> divide the data set in half. Example: binary search, merge sort...</li>
  </ul>
  
<h3>Recursive vs. iterative solutions</h3>

<p>Recursive algorithms <b>can be very space inefficient.</b> Each recursive call adds a new layer to the stack, which means that if your algorithm recurses to a depth of n, it uses at least O(n) memory. For this reason, <b>it's often better to implement a recursive algorithm <i>iteratively.</i></b></p>
<p>All recursive algorithms can be implemented iteratively, although sometimes the code to do so is much more complex.</p>
  
  
---

Keep in mind:
<ul>
  <li>Recursive algorithms are often cleaner but less optimal.</li>
  <li>All recursive problems can be implemented iteratively though they may be much more complex.</li>
  <li>A good hint that a problem is recursive is that it can be built off of subproblems.</li>
  <li>When you hear a problem beginning with the following statements, it's often (though not always) a good candidate for recursion: "Design an algorithm to compute the nth ... , "Write code to list the first n ... n "Implement a method to compute all... </li>
  <li>The runtime of a recursive function with multiple branches is typically O(branches^depth).</li>
</ul>
