This repository is under construction. I am simply using it for note-taking purposes (for now). Eventually, I would want to organize it better to benefit other people and help them in their learning and understanding of data structures and algorithms. The language used in this rep is Javascript. 
<h1>Data Structures</h1>
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


  </ul>
<h3>Depth-first search</h3>
<h3>Breadth-first search</h3>
