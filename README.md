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
