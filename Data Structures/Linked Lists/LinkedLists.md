<h2> Linked Lists (Singly and Doubly)</h2>
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png"/>
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png"/>
<p>A <b>linked list</b> is a sequential list of nodes that holds data which points to other nodes also containing data. (every node has pointer to the next node, hence the word "linked" and the last node points to null. Some examples of their usage include but are not limited to: list, queue and stack implementations, creating circular lists, model real world objects (such as trains), separate chaining, implementation of adjacency lists for graphs.</p>
<p>Terminology: <em>Head:</em> the first node. <em>Tail:</em> the last node. <em>Pointer:</em> reference to another node. <em>Node:</em> An object containing data and pointer(s).</p>

<p><b>Unlike an array, a linked list doesn't provide constant time access to a particular 'index'</b>. Meaning that if you need to find the kth element you need to iterate through k elements. <b>Then benefit of a linked list is that you can add/remove items from the beginning of the list in constant time.</b></p>

<p>Singly vs Doubly Linked Lists: <b>Singly linked lists</b> only hold a reference to the next node while <b>doubly linked lists</b> hold a reference to the next and the previous nodes.</p>
<table align="center">
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

<p align="center"><b>Linked Lists Complexity</b></p>
<table align="center">
  <tr>
    <th>Operation</th>
    <th>Singly Linked</th>
    <th>Doubly Linked</th>
  </tr>
  <tr>
    <td>Searching</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Inserting</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Removing at head</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Removing at tail</td>
    <td>O(n)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Removing in middle</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
</table>

<p>To delete a node n from a singly linked list we find the previous node and set its next node to the current n node's next node. If the list is doubly linked we must also update n.next to set n.next.prev equal to n.prev. <b>The most important things to remember are to check for the null pointer and to update the head or tail pointer as necessary.</b></p>

<h3>The runner technique</h3>
<p>Iterating through the linked list using 2 pointers simultaneously; one being ahead of the other by a fixed amount. ex: p1 moves every 2 elements for every move that p2 makes (when p1 hits the end of the linked list, p2 will be at the midpoint).</p>

<h3>Recursion</h3>
<p>If you're having trouble solving a linked list problem, explore if a recursive approach will work. Recursive algorithms are often cleaner but less optimal. Recursive algorithms take at least O(n) space where n is the depth of the recursive call. All recursive problems can be implemented iteratively though they may be much more complex. The first step in solving a recursive problem is to ask yourself: what's the simplest possible input (base case)? The second step is to play around and visualize. The third step is to relate hard cases/large examples to simple cases/smaller examples.</p>

---

<ul> Keep in mind: 
  <li>Recursive algorithms are often cleaner but less optimal.</li>
  <li>Array shifts are very expensive, but in linked lists it's easier, you just create other lists.</li>
  <li>Linked lists tend to do very well with accessing and sorting numbers.</li>
  <li>If you're having trouble solving a linked list problem, explore if a recursive approach will work. </li>
</ul>
