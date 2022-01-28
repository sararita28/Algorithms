<h2>Heaps</h2>
<p>A <b>heap</b> is a <b>tree-based</b> DS that satisfies the heap invarient (a.k.a heap property). If A is a parent node of B then A is ordered with respect
  to B for all nodes A and B in the heap. Basically, the value of the parent node is always greater than or equal to the value of the child node for all nodes
  (in case of a max heap) or the opposite (in case of a min heap).</p>
  <p>Alternative Definition: A min-heap is a complete binary tree (that is, totally filled other than the rightmost elements on the last level) where each node is smaller than its children. The root, therefore, is the minimum element in the tree. A max-heap is essentially equivalent, but the elements are in descending order rather than ascending order.</p>

<p>We have two key operations on a min-heap: insert and extract_min.</p>
<ul>
  <li>Insert: When we insert into a min-heap, we always start by inserting the element at the bottom. We insert at the rightmost spot so as to maintain the 
    complete tree property. Then, we "fix"the tree by swapping the new element with its parent, until we find an appropriate spot for the element. We essentially
    bubble up the minimum element. This takes O(log n) time, where n is the number of nodes in the heap.</li>
  <li>Extract_min: Finding the minimum element of a min-heap is easy: it's always at the top. To extract it, we remove the minimum element and swap it with the 
    last element in the heap (the bottommost, rightmost element). Then, we bubble down this element, swapping it with one of its children until the min-heap property is restored. We swap it with the left child or the right child depending on their values to maintain the min-heap ordering. This algorithm will also take O(log n) time.</li>
</ul>

 <h3>Types of Heaps</h3>
 <ul>
  <li>Binary Heap</li>
  <li>Fibonacci Heap</li>
  <li>Binomial Heap</li>
  <li>Pairing Heap</li>
  <li>etc...</li>
</ul>

<h3>Adding Elements to a Binary Heap</h3>
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

<h3>Removing Elements from a Binary Heap</h3>
<ul>
  <li><h5>Naive Removing</h5>
    <p>In general with heaps we always want to remove the root value (because it's the node of interest, with the highest priority). Removing the root is called <b>polling.</b> If you're using an array to represent your tree, your root will always be at index 0. When you're polling the root you'll want to replace it with another element (usually the last element of the array). So you swap them, you get rid of the element in question and you now need to move the new root in order to satisfy the heap-invarient property so you start <b>bubbling down</b> by comparing the root's children and swapping with the smallest (for Min Heaps). If they're equal you swap with the left-most element by default. If you want to remove another element other than the root, you start by selecting the root and do a linear search/scan till you find the element in question. Once you've marked it as the element to be removed you swap it with the last node of the tree and adjust till you satisfy the heap-invarient property. </p> </li>
  <li><h5>Removing with a Hash Table</h5>
    <p>If we have many indices with the same value and need to remove an instance of that value, which one is removed does not matter as long as the heap-invarient property is satisfied. </p></li>
</ul>

---

<ul> Keep in mind: 
  <li>A heap is really good at basic ordering and keeping track of max & mins.</li>
</ul>
