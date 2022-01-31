<h2>Queues</h2>
<img src='https://benoitpasquier.com/images/2020/03/queue-data-structure.png'/>
<p>A <b>queue</b> is a linear data structure which models real-world queues by having 2 primary operations (i.e. enqueue and dequeue). Every queue has a front and a back. We insert elements through the back (enqueuing a.k.a adding or offering) and remove them through the front (dequeuing a.k.a polling). Some examples of their usage include but are not limited to: waiting lines, keep track of the x most recently added elements, web server request management (first come first served), breadth first search graph traversal ... </p>

<h3>Implementing a Queue</h3>
<p>A queue uses FIFO ordering (items are removed in the order they were added). It uses the following operations:</p>
<ul>
  <li><b>add(item):</b> adds an item to the end of the list.</li>
  <li><b>remove(): </b>removed the first item of the list.</li>
  <li><b>peek(): </b>returns the top of the queue.</li>
  <li><b>isEmpty(): </b>returns true if the queue is empty.</li>
</ul>

<p>A queue can also be implemented with a linked list as long as items are added and removed from the opposite side (in fact, they're essentially the same thing).</p>


<p align="center"><b>Queues Complexity</b></p>
<table align="center">
  <tr>
    <td>Enqueuing (i.e. inserting)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Dequeuing (i.e. removing 1st element)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Peeking (i.e. returning top of the queue)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Searching</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Removing (element other than first)</td>
    <td>O(n)</td>
  </tr>
</table>

---

<ul> Keep in mind: 
  <li>It's especially easy to mess up the updating of the 1st and last nodes in a queue(be sure to double check that).</li>
  <li>One place where queues are often used is the breadth-first search, or in implementing a cache.</li>
  <li>In breadth-first search, we use a queue to store a list of the nodes that we need to process. Each time we process a node, we add its adjacent nodes to the back of the queue. This allows us to process nodes in the order in which they're viewed.</li>
</ul>
