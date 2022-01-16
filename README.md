🚧 This repository is under construction. I am simply using it for note-taking purposes (for now). Eventually, I would want to organize it better to benefit other people and help them in their learning and understanding of data structures and algorithms. The language used in this rep is <b>Javascript.</b>
<h1>Data Structures</h1>
<p><b>Definition:</b> A data structure (DS) is a way of organizing data so that it can be used efficiently.</p>
<p><b>Why are they important?: </b>They're essential in creating fast and powerful algorithms, they help manage and organize data, they make code cleaner and easier to understand. They can make the difference between having an "okay" product to having an outstanding one.</p>
<p>An <b>abstract data type (ADT)</b> is an abstraction of a data structure which provides only the interface to which a data structure must adhere to. The interface doesn't give specific details about how something should be implemented.<em>Analogy: </em> We want to go from one place to another using a mode of transportation (this is our abstract data type). How exactly we do that is our data structure. <em>Examples: </em> In the table below you have a few ADT and some possible ways of implementing them (DS).</p>
<table>
  <tr>
    <th>Abstraction Data Type</th>
    <th>Data Structure</th>
  </tr>
  <tr>
    <td>List</td>
    <td>Dynamic Array/ Linked List</td>
  </tr>
  <tr>
    <td>Queue</td>
    <td>Linked List based Queue / Array based queue / Stack based Queue</td>
  </tr>
  <tr>
    <td>Map</td>
    <td>Tree map / Hash Map / Hash table</td>
  </tr>
</table>

<h3>Computational Complexity Analysis</h3>
<p>As programmers, we often ask ourselves 2 essential questions: how much time does an algorithms need to finish? and how much space does it need for its computation?</p>
<p>Big Θ(Theta), Big O and Big Ω (Omega) are used to standardize talking about these two concepts of time and space. </p>
<ul>
<li><b>Big Θ(Theta)</b> is a tight (upper and lower) bound. It tells you what the least and the most amounts of time are.</li>
<li><b>Big Ω (Omega)</b> is a lower bound. It tells you what the least amount of time is.</li>
<li><b>Big O</b> is an upper bound. It cares about the worst-case scenario. When working with large amounts of data, all we mostly care about is Big O.</li>
</ul>
<p>When calculating time and space complexity, you want to drop the constants and the non-dominant terms.</p>
<p>The table below represents big-O complexities (ordered from smallest to largest). n represents the size of the input.</p>
<table>
  <tr>
    <td>Constant Time</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Logarithmic Time</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Linear Time</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Linearithmic Time</td>
    <td>O(nlogn)</td>
  </tr>
  <tr>
    <td>Quadric Time</td>
    <td>O(n^2)</td>
  </tr>
  <tr>
    <td>Cubic Time</td>
    <td>O(n^3)</td>
  </tr>
  <tr>
    <td>Exponential Time</td>
    <td>O(b^n)</td>
  </tr>
  <tr>
    <td>Factorial Time</td>
    <td>O(n!)</td>
  </tr>
</table>
<h2>Types of Data Structures:</h2>
<ul>
    <li>Arrays</li>
    <li>Linked Lists</li>
    <li>Stacks</li>
    <li>Queues</li>
</ul>

---

<h3>I. Arrays (Static and Dynamic)</h3>
<p><b>Static Arrays: </b>are fixed lengt containers containing n elements indexable from the range [0, n-1]. Static arrays are used a lot. Some examples of their usage include but are not limited to: storing and accessing sequential data, temporarily storing objects, used by IO routines and buffers, lookup tables and inverse lookup tables, return multiple values from a function, dynamic programming to cache answers to subproblems...</p>
<p><b>Array Complexity</b></p>
<table>
  <tr>
    <th>Operation</th>
    <th>Static Array</th>
    <th>Dynamic Array</th>
  </tr>
  <tr>
    <td>Access</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Insertion</td>
    <td>N/A</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Appending</td>
    <td>N/A</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Deletion</td>
    <td>N/A</td>
    <td>O(n)</td>
  </tr>
</table>

---

<h3> II. Linked Lists (Singly and Doubly)</h3>
<p>A <b>linked list</b> is a sequential list of nodes that holds data which points to other nodes also containing data. (every node has pointer to the next node, hence the word "linked" and the last node points to null. Some examples of their usage include but are not limited to: list, queue and stack implementations, creating circular lists, model real world objects (such as trains), separate chaining, implementation of adjacency lists for graphs.</p>
<p>Terminology: <em>Head:</em> the first node. <em>Tail:</em> the last node. <em>Pointer:</em> reference to another node. <em>Node:</em> An object containing data and pointer(s).</p>
<p>Singly vs Doubly Linked Lists: <b>Singly linked lists</b> only hold a reference to the next node while <b>doubly linked lists</b> hold a reference to the next and the previous nodes.</p>
<table>
  <tr>
    <th>Type</th>
    <th>Pros</th>
    <th>Cons</th>
  </tr>
  <tr>
    <td>Singly</td>
    <td>Uses less memory, simpler implementation</td>
    <td>Cannot easily access previous elements</td>
  </tr>
  <tr>
    <td>Doubly</td>
    <td>Can be traversed backwards</td>
    <td>Takes 2x memory</td>
  </tr>
</table>

<p><b>Linked Lists Complexity</b></p>
<table>
  <tr>
    <th>Operation</th>
    <th>Singly Linked</th>
    <th>Doubly Linked</th>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Insert at Head</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Insert at tail</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Remove at head</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Remove at tail</td>
    <td>O(n)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Remove in middle</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
</table>

---

<h3>III. Stacks</h3>
<p>A <b>stack</b> is a one-ended linear data structure which models a real world stack by having two primary operations(i.e. push and pop). Elements in a stack always get removed and added to the top of the pile (LIFO - Last in, first out). It's critical to understand that you ONLY have access to the first element of a stack. Some examples of their usage include but are not limited to: undo mechanisms in text editors, matching brackets and braces in compilers, model a pile of books or plates, support recursion by keeping track of previous function calls, do a depth first search on a graph ... </p>


<p><b>Stacks Complexity</b></p>
<table>
  <tr>
    <td>Pushing</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Popping</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Peeking</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Searching</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>O(1)</td>
  </tr>
</table>

---

<h3>IV. Queues</h3>
<p>A <b>queue></b> is a linear data structure which models real-world queues by having 2 primary operations (i.e. enqueue and dequeue). Everu queue has a front and a back. We insert elements through the back (enqueuing a.k.a adding or offering) and remove them through the front (dequeuing a.k.a polling). Some examples of their usage include but are not limited to: waiting lines, keep track of the x most recently added elements, web server request management (first come first served), breadth first search graph traversal ... </p>

<p><b>Queues Complexity</b></p>
<table>
  <tr>
    <td>Enqueuing</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Dequeuing</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Peeking</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Contains</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Removal</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Is empty</td>
    <td>O(1)</td>
  </tr>
</table>

---

<h3>V. Heaps</h3>

<h4>Priority Queues</h4>
<p>A <b>priority queue</b> is an ADT that operates similar to a regular queue except that <em>each element has a certain priority</em>. The priority of the elements determine the order in which the elements are removed from the priority queue. Priority queue only support elements that are comparable (meaning the data in PQ must be able to be ordered in some way in order to assign relative priorities to each element). so how does the priority queue know which is the next highest-priority element? The best way to do that (time-complexity-wise) is by using a <b>heap.</b></p>
<p> <u>Note:</u> Heaps are usually the best implementation of PQ in terms of time complexity, however, PQs can also be implemented using other DS.</p>

<p>A <b>heap></b> is a <b>tree-based</b> DS that satisfies the heap invarient (a.k.a heap property). If A is a parent node of B then A is ordered with respect to B for all nodes A and B in the heap. Basically, the value of the parent node is always greater than or equal to the value of the child node for all nodes (in case of a max heap) or the opposite (in case of a min heap).</p>
<p>Some examples of PQ's usage include but are not limited to: implementation of Dijkstra's Shortest path algorithm, dynamically fetching the 'next best' or 'next worst' element, Huffman coding for lossless data compression, best first search algorithms such as A*, Minimum Spanning tree algorithms...</p>

<p><b>PQ with Binary Heap Complexity</b></p>
<table>
  <tr>
    <td>Binary Heap Construction</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Polling</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Peeking</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Adding</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Naive Removing</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Advanced removing with hash table</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Naive contains</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Contains check with hash table</td>
    <td>O(1)</td>
  </tr>
</table>

<h4>Turning Min PQ into Max PQ</h4>
<p>Since elements in PQ are comparable they implement some sort of <em>comparable interface</em> which we can <em>negate/invert</em> to achieve a Max heap.</p>

<ul> Types of Heaps
  <li>Binary Heap</li>
  <li>Fibonacci Heap</li>
  <li>Binomial Heap</li>
  <li>Pairing Heap</li>
  <li>etc...</li>
</ul>

<h4>Adding Elements to a Binary Heap</h4>
<p>A <b>binary heap</b> is a binary tree that supports the heap invariant. In a binary heap, every node has <em>exactly two children.</em></p>
<p>A <b>complete binary tree</b> is a tree in which every level (except possibly the last) is completely filled and all the nodes are as far left as possible (so it starts inserting from left to right).</p>
<p><b>Binary Heap Representation: </b>You can use different ways to represent a binary heap (such as objects and pointers, arrays...) but using arrays is probably the most convenient way to do so.If you're using arrays; say the parent child's index is represented by i. The left child index and right child index would be, respectively, 2i+1 and 2i+2 (0-based).</p>
<ul>
  <li><h5>Naive Adding</h5>
    <p>To add elements to a binary Heap you use what's called <b>bubbling up (a.k.a swimming/swifting up).</b> So basically, you insert your element at the bottom of the tree and swap it with higher elements till you're no longer in violation of the heap property.</p></li>
  <li><h5>Adding with a Hash Table</h5>
    <p>Using a hash table is a more efficient way of adding/removing elements from a binary heap. It allows every node to be mapped to the index it's found at and provides a constant time lookup. If there are 2+ nodes with the same value it will map the value to all the value's positions (indices) by maintaing a set/tree set.</p></li>
<table>
 <tr>
   <th>Node Value (Key)</th>
   <th>Positions(s) (Value)</th>
 </tr>
 <tr>
   <td> </th>
   <td> </th>
 </tr>  
  <tr>
   <td> </th>
   <td> </th>
 </tr>  
</table>
  </ul>


<h4>Removing Elements from a Binary Heap</h4>
<ul>
  <li><h5>Naive Removing</h5>
    <p>In general with heaps we always want to remove the root value (because it's the node of interest, with the highest priority). Removing the root is called <b>polling.</b> If you're using an array to represent your tree, your root will always be at index 0. When you're polling the root you'll want to replace it with another element (usually the last element of the array). So you swap them, you get rid of the element in question and you now need to move the new root in order to satisfy the heap-invarient property so you start <b>bubbling down</b> by comparing the root's children and swapping with the smallest (for Min Heaps). If they're equal you swap with the left-most element by default. If you want to remove another element other than the root, you start by selecting the root and do a linear search/scan till you find the element in question. Once you've marked it as the element to be removed you swap it with the last node of the tree and adjust till you satisfy the heap-invarient property. </p> </li>
  <li><h5>Removing with a Hash Table</h5>
    <p>If we have many indices with the same value and need to remove an instance of that value, which one is removed does not matter as long as the heap-invarient property is satisfied. </p></li>
</ul>

---

<h3>VI. Union Find</h3>
<p><b>Definition:</b> Union Find is a DS that keeps track of elements which are split into 1+ disjoint sets. It has two primary operations: <b>find</b> and <b>union</b>. 'Find' will tell you what group an element belongs to, and 'Union' merges two groups together. Some examples of Union Find usage include but are not limited to: Kruskal's minimum spanning tree algorithm, grid percolation, network connectivity, least common ancestor in trees, image processing...</p>
<p><b>Union Find Complexity</b></p>
<table>
  <tr>
    <td>Construction</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Union</td>
    <td>α(n)</td>
  </tr>
  <tr>
    <td>Find</td>
    <td>α(n)</td>
  </tr>
  <tr>
    <td>Get component size</td>
    <td>α(n)</td>
  </tr>
  <tr>
    <td>Check if connected</td>
    <td>α(n)</td>
  </tr>
  <tr>
    <td>Count components</td>
    <td>O(1)</td>
  </tr>
</table>
<em>Note: α(n) = amortized constant time (almost constant time but not quite)</em> </br>
<p>One way to optimize the Union Find DS is with <b>path compression</b>. Path compression allows you to find out what the root node of a component is since all children point to the root node (so you don't need to traverse a sequence of nodes).</p>

---

<h3>VII. Binary Trees and Binary Search Trees</h3>

<ul><b>Definition:</b> A tree is an undirected graph which satisfies any of the following definitions: 
  <li>An acyclic connected graph (acyclic = has no cycles).</li>
  <li>A connected graph with N nodes and N-1 edges.</li>
  <li>A graph in which any two verticles are connected by exactly one path.</li>
</ul>
<p>If we have a <b>rooted tree</b> then we'll want to have a reference to the root node of our tree. Which node is selected doesn't matter because any node can root the tree. A <b>child</b> is a node that extends from another node. A <b>parent</b> is the inverse of this. A <b>leaf node</b> is a node with no children. A <b>subtree</b> is a tree entirely contained within another. </p>

<p>Among the long list of tree DS, you have binary trees and binary search trees. A <b>binary tree </b>is a tree for which every node has at most 2 children. A <b>binary search tree </b>is a binary tree that satisfies the <b>BST invarient:</b> the left subtree has elements smaller than the value of the current node and the right subtree has elements larger than the value of the current node. <b>And this would depend on if you allow for duplicate values or not (usually we're only interested in unique elements inside our tree).</b> Some examples of BT and BST usage include but are not limited to: implementation of some map and set ADTs, red black trees, AVL trees, Splay trees, binary heaps, syntax trees, treap...</p>

<p><b>BST Complexity</b></p>
<table>
  <tr>
    <td>Insert</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Delete</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
  </tr>
</table>

<ul><h4>Tree Traversals (preorder, inorder, postorder, level order)</h4>
  <li>Preorder: prints the value of a node <b>before</b> the recursive calls</li>
  <li>Inorder: prints the value of a node <b>between</b> the recursive calls. Doing so will also print the element values in a sorted, ascending order.</li>
  <li>Postorder: prints the value of a node <b>after</b> the recursive call</li>
  <li>Level order: prints the value of a node <b>as it appears</b>, one level at a time (so left and right subtrees altogether). It does that by using a breadth-first search from the root to the leafs. To do so, you need to maintain a queue of the nodes left to explore.</li>
</ul>

---

<h3>VIII. Hash Table</h3>
<p>A <b>hash table (HT)</b> is a DS that provides a mapping from keys to values using a technique called <b>hashing</b>. All of the keys have to be unique, but values don't. HTs are often used to track item frequencies. Key-value pairs can be of any type, but the keys need to be <em>hashable</em>. A <b>hash function</b> is a function that maps a key 'x' to a whole number in a fixed range. We can also define hash functions for arbitrary objects (such as strings, lists, tuples ...)</p>
<ul><h4>Properties of Hash functions:</h4>
  <li>- If H(x)=H(y) then objects x and y <b>might be equal</b>, but if H(x)≠H(y) then x and y are <b>certainly not equal</b>. This means that instead of comparing x and y directly, a smarter approach is to first compare their hash values (and only if the hash values match do we then compare them directly).</li>
  <li>- A hash function must be <b>deterministic</b>. Meaning that if H(x) = y then H(x) must always produce y and never another value.</li>
  <li>- We try very hard to make them <b>uniform</b> to minimize the number of hash collisions. A hash collision is when 2 objects x,y hash to the same value (i.e. H(x)=H(y)).</li>
</ul>
<h4>What makes a key "hashable"?</h4>
<p>We say that a key of type T is hashable if it is immutable and we have a hash function H(k) defined for all keys k of type T.</p>

<h4>How does a hash table work?</h4>
<p>A hash table is just a fancy word for an 'array'. You can have a very fast insertion, lookup and remova of O(1) time using a hash function as a way to index into a hash table. However, the constant time behavior attributed to hash tables is only true if you have a good <b>uniform hash function.</b></p>
<h4>How do we handle collisions?</h4>
<ul><p>There are many hash collision resolution techniques. The 2 most popular being: <p>
  <li><b>Separate chaining</b>: deals with hash collisions by maintaining a DS (usually a linked list) to hold all the different values which hashed to a particular value <b>(basically, you have multiple auxiliary DS)</b>.</li> 
  <li><b>Open addressing</b>: deals with hash collisions by finding another place within the hash table for the object to go by offsetting it from the position to which it hashed to <b>(basically, everything is kept within one big array)</b>.</li>
</ul>

<p><b>Hash Table Complexity</b></p>
<table>
  <tr>
    <th>Operation</th>
    <th>If it's a good uniform hash function</th>
    <th>Worst</th>
  </tr>
  <tr>
    <td>Insertion</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Removal</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(1)</td>
    <td>O(n)</td>
  </tr>
</table>

<h4>Hash Table & Separate Chaining</h4>
<p><b>Separate chaining</b> is one of many strategies to deal with hash collisions by maintaining an auxiliary DS (usually linked list) to hold all the different values which hashed to a particular value. Once the HT is full you should create a new one with a larger capacity and rehash all the items inside the old HT and disperse them throughout the new HT at different locations. </p>

<h4>Hash Table & Open Addressing</h4>
<p>When using open addressing as a collision-resolution technique, the key-value pairs are stores in the table/array itself (as opposed to using an auxiliary DS). This means that we need to care a great deal about the size of the hash table and how many elements are currently in the table so you need to keep track of the load factor.</p>
<p>Load factor = items in table / size of table</p>
<p>Constant time (O(1)) assumes the load factor α is kept below a certain fixed value/treshold meaning that once it gets above it we need to grow the table size (ideally exponentially).</p>
<p>If you try inserting a key/value pair into the table but it's occupied, you try offsetting the current position subject to a probing sequence P(x) till you find an unoccupied slot.</p>
<ul><p>There's an infinite amount of probing sequences to choose from. Some of them include: </p>
  <li>Linear probing: P(x) = ax + b where a,b are constants.</li>
  <li>Quadratic probing: P(x) = ax^2 + bx + c where a,b,c are constants and a≠0.</li>
  <li>Double hashing: P(k,x) = x*H2(k) where H2(k) is a secondary hash function.</li>
  <li>Pseudo random number generator: P(k,x) = x*RNG(H(k),x) where RNG is a random number generator function seeded with H(k).</li>
</ul>
<p>Note: Most randomly selected probing sequences modulo N will produce a cycle <em>shorter than the table size</em> which will cause an infinite loop.</p>
<p>The way to fix that and handle probing functions which produce cycles shorter than the table size is to avoid such functions altogehther and only use probing functions that produce a cycle exactly the length of your table elements (with a few exceptions).</p>

<h4>Hash Tables & Linear Probing</h4>
<p><b>Linear Probing</b> is a probing method which probes according to a linear formula, specifically: P(x)=ax+b where a≠= and a,b are constants.</p>
<p><b>Q:</b> Which value(s) of the constant a in P(x) = ax produce a full cycle modulo N?</p>
<p><b>A:</b> A value when a and N are <b>relatively prime</b> meaning that a and N's Greatest common denominator(GCD) is 1. So, when GCD(a,N)=1 the probing function P(x) is able to generate a complete cycle and you'll always be able to find an empty bucket.</p>

<h4>Hash Table & Quadratic Probing</h4>
<p><b>Quadratic probing</b> is a probing method which probes according to a quadratic formula, specifically: P(x) = ax^2 + bx + c where a,b,c are constants and a≠0. Quadratic probing have the issue that they easily produce cycles, causing an infinite loop.</p>
<p><b>Q: </b>How do we pick a probing function which always works?</p>
<p><b>A: </b>3 of the most popular approaches are: </p>
<ol>
  <li>Let P(x) = x^2 , keep the table size a prime number > 3 and also keep α<= 1/2</li>
  <li>Let P(x) = (x^2 + x)/2 and keep the table size a power of 2</li>
  <li>Let P(x) = (-1^x)*x^2 and keep the table size a prime number N where N ≡(is congruent to) 3 mod 4</li>
</ol>

<h4>Hash Tables & Double Hashing</h4>
<p><b>Double Hashing </b>is a probing method which probes according to a constant multiple of another hash function, specifically: P(k,x) = x*H2(k) where H2(k) is a secondary hash function. Note: H2(k) must hash the same type of keys as H1(k)</p>
<p><b>Q: </b>Since DH reduces to linear probing at runtime, we may end up with a linear probing function in which case we have a cycle. How do we fix this?</p>
<p><b>A: </b>You pick the table size to be a prime number and also compute the value of	δ. δ=H2(k) mod N. However, if δ=0 you are going to be stuck in a cycle so when this happens, set δ=1</p>
<p><b>Q: </b>How do we construct our secondary hash function (H2(k))</p>
<p><b>A: </b>There are many well known high quality hash functions for the fundamental data types that we can use and combine to construct the secondary hash function. Frequently, they're picked from a pool of hash functions called <b>universal hash functions</b>.</p>

<h4>Removing an element in a hash table using Open Addressing</h4>
<p>When we remove an element we're going to place a unique <b>marker called a tombstone</b> (instead of null) to indicate that a (k,v) pair was in the bucket but has been removed. This will tell you, when searching for elements, that the bucket should be skipped. If you don't do that, then during a search, you will see that the bucket says 'null' and assume that the element you're looking for is simply not in the table.</p>
<p><b>Q: </b>Then how do you deal with the issue of cluttering tombstones that are counted as filled slots and that increase the load factor?</p>
<p><b>A: </b>Tombstones will be removed when the table is resized. Also, you can replace tombstones with (k,v) pairs during the insertion. Another optimization is called <b>lazy deletion/relocation</b>. Basically you replace the first tombstone you encounter with the value you did a lookup for then replace the old one with a null token. And next time you lookup the key, it'll be found much faster.</p>

<h3> IX. Fenwick Tree (a.k.a Binary Index Tree)</h3>
<p><b>Fenwick Tree</b> is a DS that supports sum range queries as well as setting values in a static array and getting the value of the prefix sum up some index efficiently. </p>

<p><b>Fenwick Tree Complexity</b></p>
<table>
  <tr>
    <td>Construction</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Point Update</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Range Sum</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Range Update</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Adding Index</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Removing Index</td>
    <td>N/A</td>
  </tr>
</table>

<p>Unlike a regular array, in a Fenwick Tree, a specific cell is responsible for other cells as well. The position of the <b>least significant bit (LSB)</b> determines the <b>range of the responsibility</b> that cell has to the cells below itself. You can determine that by checking the index's number in binary. In a Fenwick tree we may compute the <b>prefix sum</b> up to a certain index, which ultimately lets us perform range sum queries. With range queries, you cascade down from the current index by <b>continuously removing the LSB</b> till 0.</p>

<h4>Fenwick Tree & Point Update </h4>
<p>Point update is the opposite of prefix sum/ range queries. Instead of removing the LSB, we add it.</p>


---

<h3> X. Suffix Arrays</h3>
<p>A <b>suffix</b> is a substring at the end of a string of characters. A <b>suffix array</b> is an array which contains all the <em>sorted</em> suffixes of a string. The suffix array provides a space efficient alternative to a <b>suffix tree</b> which itself is a compressed version of a <b>trie.</b> Suffix arrays can do everything suffix trees can, with some additional information such as a Longest Common Prefix (LCP) array.</p>

<h4>The Longest Common Prefix (LCP) array</h4>
<p>The LCP array is an array where each index tracks and stores how many characters 2 sorted adjacent suffixes have in common. </p>

<h4>Using Suffix arrays & LCP arrays to find unique substrings</h4>
<p>For every string, there are exactly n(n+1)/2 substrings</p>
<p>The number of unique substrings in a string is: #of substrings - duplicates</p>

---

<h3> XI. Balanced Binary Search Trees (BBST)</h3>
<p>A <b>balanced binary Search tree</b> is a self-balancing binary search tree. It adjusts itself in order to maintain a low (logarithmic) height allowing for faster operations such as insertions and deletions.</p>

<p><b>Binary Search Tree Complexity</b></p>
<table>
  <tr>
    <td>Insert</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Delete</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(logn)</td>
  </tr>
</table>

---

<h1>Algorithms</h1>
<h3>Binary Search</h3>
<h3>Asymptotic notation</h3>
<h3>Selection sort</h3>
<h3>Insertion sort</h3>
<h3>Recursive algorithms</h3>
<h3>Towers of Hanoi</h3>
<h3>Merge sort</h3>
<h3>Quick sort</h3>
<p>The real work of quicksort happens during the divide step, which partitions subarray array[p..r] around a pivot drawn from the subarray. Although we can choose any element in the subarray as the pivot, it's easy to implement partitioning if we choose the rightmost element of the subarray, A[r], as the pivot.</p>

<p>In practice, quicksort outperforms merge sort, and it significantly outperforms selection sort and insertion sort.</p>

<p><b>Merge sort vs quick sort: </b>Merge sort and quick sort are both divide and conquer algorithms(so, recursive algorithms). In merge sort, the divide step doesn't do anything important, it's all in the combine step. Quick sort is the opposite, the combine step doesn't do anything, it's all in the divide step (in pivot selection to be precise). In merge sort, you never see a subarray with no elements, but you can in quicksort, if the other elements in the subarray are all less than the pivot or all greater than the pivot.</p>

<ul> <h6>Concepts</h6>
  <li>Partitioning</li>
  </ul>
<h3>Graph representation</h3>
<p><b>Three ways to store graphs: </b>edge lists, adjacency matrices, and adjacency lists.</p>
<ul> <h6>Concepts</h6>
  <li>Vertex</li>
  <li>Edge</li>
  <li>Directed vs undirected graphs</li>
  <li>Incident vs Adjacent edge</li>
  <li>Neighbors</li>
  <li>Degree (of the vertex)</li>
  <li>Path (shortest path)</li>
  <li>Cycle</li>
  <li>Weight (weighted graph, weighted directed graph)</li>
  <li>Directed acyclic graph (a.k.a dag)</li>
  <li>Entering and leaving a vertex/li>
  <li>In-degree vs out-degree</li>
  <li>Edge list</li>
  <li>Adjacency matrices</li>
  <li>Free tree</li>


  </ul>
<h3>Depth-first search</h3>
<h3>Breadth-first search</h3>
<p> finds shortest paths from a given source vertex to all other vertices, in terms of the number of edges in the paths.</p>
