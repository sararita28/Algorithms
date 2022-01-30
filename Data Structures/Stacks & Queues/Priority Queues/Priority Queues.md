<h2>Priority Queues</h2>

<p>A <b>priority queue</b> is an Abstract Data Type(ADT) that operates similar to a regular queue except that <em>each element has a certain priority</em>. The priority of the elements determine the order in which the elements are removed from the priority queue. Priority queue only support elements that are comparable (meaning the data in PQ must be able to be ordered in some way in order to assign relative priorities to each element). so how does the priority queue know which is the next highest-priority element? The best way to do that (time-complexity-wise) is by using a <b>heap.</b></p>
<p> <u>Note:</u> Heaps are usually the best implementation of PQ in terms of time complexity, however, PQs can also be implemented using other DS.</p>

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

<h3>Indexed Priority Queue</h3>
<p>An <b>Indexed Priority Queue (IPQ)</b> is a traditional priority queue variant which on top of the regular PQ operations supports quick updates and deletions of key-value pairs. IPQ allows you to dynamically update the value/priority of certain keys. The first step to using an IPQ is to assign index values to all the keys forming a bidirectional mapping.</p>

