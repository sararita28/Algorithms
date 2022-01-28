<h2>Advanced Topics</h2>

<h3>Useful Math</h3>
<ul>
  <li><b>Sum of integers through n</b> (1+2+3+....+n): 
    <ul>
      <li>If n is even we pair 1 with n, 2 with n-1 and so on... we will have n/2 pairs <b>each</b> with sum n+1 for a total of (n*(n+1))/2</li>
      <li>If n is odd we pair 0 with n, 1 with n-1 and so on... we will have (n+1)/2 pairs <b>each</b> with sum n for a total of (n*(n+1))/2</li>
    </ul>
  <li><b>Sum of powers of 2:</b> The sum of a sequence of powers of 2 is roughly equal to the next value in the sequence. Therefore, the sum of powers of 2 through n (2^0 + 2^1 + 2^3 ... + 2^n) is 2^(n+1) - 1</li> 
  <li><b>Bases of logs</b>: What's the relationship between log(base b)k and log(base x) k? </br>
    log(base 10)p = (log(base2)p)/log(base2)10         </br>
   <i>Logs of different bases are only off by a constant factor.</i></li>
  <li><b>Permutations</b>: n! = n * n-1 * n-2 * n-3 * ... * 1</li>
  <li><b>Combinations</b>: n-choose-k = 1/k! * n!(n-k)! = n!/(k!(n-k)!)</li>
  <li><b>Proof by induction</b>: Induction is a way of proving something to be true. It's closely related to recursion. You have a base case, an assumption and an inducive step.</li>
</ul>

<h3>Topological sort</h3>
<p>A <b>topological sort</b> of a directed graph is a way of ordering the list of nodes such that if (a, b) is an edge in the graph then a will appear before b in the list. If a graph has cycles or is not directed, then there is no topological sort.</p>

<h3>Dijkstra's Algorithm</h3>
<p><b>Dijkstra's algorithm</b> is a way to find the shortest path between two points in a weighted directed graph (which might have cycles). All edges must have positive values.</p>

<h3>Hash table collision resolution</h3>
<p>There are a number of ways of handling collisions in hash tables:</p>
<ul>
  <li><i>Chaining with Linked Lists (most common):</i> the hash table's array maps to a linked list of items. We just add items to this linked list. As long as the number of collisions is fairly small, this will be quite efficient. In the worst case, lookup isO(n), where n is the number of elements in the hash table. This would only happen with either some very strange data or a very poor hash function (or both).</li>
  <li><i>Chaining with Binary Search Trees:</i> We store collisions in a binary search tree for a worst-case runtime of O(logn). In practice, we would rarely take this approach unless we expected an extremely nonuniform distribution.</li>
  <li><i>Open Addressing with Linear Probing:</i> When a collision occurs, we just move on to the next index in the array until we find an open spot. (Or, sometimes, some other fixed distance, liketheindex + 5). If the number of collisions is low, this is a very fast and space-efficient solution. 2 drawbacks are the the total number of entries in the hash table is limited by the size of the array (which is not the case with chaining) and there's the issue of clustering.</li>
  <li><i>Quadratic Probing and Double Hashing:</i> The distance between probes does not need to be linear. You could, for example, increase the probe distance quadratically. Or, you could use a second hash function to determine the probe distance.</li>
</ul>

<h3>Rabin-Karp substring search</h3>

<h3>AVL trees</h3>
<p>An AVL tree is one of two common ways to implement tree balancing. An AVL tree stores in each node the height of the subtrees rooted at this node. Then, for any node, we can check if it is height balanced: that the height of the left subtree and the height of the right subtree differ by no more than one. This prevents situations where the tree gets too lopsided.</p>

<h3>Red-Black trees</h3>
<p>Red-black trees (a type of self-balancing binary search tree) do not ensure quite as strict balancing, but the balancing is still good enough to ensure O(log n) insertions, deletions, and retrievals. They require a bit less memory and can rebalance faster (which means faster insertions and removals), so they are often used in situations where the tree will be modified frequently. Red-black trees operate by enforcing a quasi-alternating red and black coloring (under certain rules) and then requiring every path from a node to its leaves to have the same number of black nodes. Doing so leads to a reasonably balanced tree.
  <ul>
    <li>Every node is either red or black.</li>
    <li>The root is black.</li>
    <li>The leaves, which are NULL nodes, are considered black.</li>
    <li>Every red node must have two black children. That is, a red node cannot have red children (although a black node can have black children).</li>
    <li>Every path from a node to its leaves must have the same number of black children.</li>
  </ul></p>

<h3>MapReduce</h3>
<p>MapReduce is used widely in system design to process large amounts of data. As its name suggests, a MapReduce program requires you to write a Map step and a Reduce step. The rest is handled by the system.</p>
