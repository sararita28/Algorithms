<h2>Union Find (a.k.a disjoint set)</h2>
<img src='https://i0.wp.com/algorithms.tutorialhorizon.com/files/2018/04/Disjoint-Sets-example.png?ssl=1'/>
<p><b>Definition:</b> Union Find is a DS that keeps track of elements which are split into 1+ disjoint sets. It has two primary operations: <b>find</b> and <b>union</b>. 'Find' will tell you what group an element belongs to, and 'Union' merges two groups together. Some examples of Union Find usage include but are not limited to: Kruskal's minimum spanning tree algorithm, grid percolation, network connectivity, least common ancestor in trees, image processing...</p>
<p align='center'><b>Union Find Complexity</b></p>
<table align='center'>
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
