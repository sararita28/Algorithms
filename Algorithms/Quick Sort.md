<h2>Quick sort</h2>
<p><b>Runtime: O(n^2) | Memory: O(logn)</b></p>
<p>Pick a random element and partition the array such that all numbers that are less than the element 
  come before all numbers that are greater than it. If we repeatedly partition the array (and its sub-arrays) around an element, the array will eventually become 
    sorted.</p>

<p>Quick sort is a divide and conquer algorithms(i.e. recursive algorithms). In quicksort, the combine step doesn't do anything; the real work of quicksort happens during the divide step(in pivot selection to be precise), which partitions subarray array[p..r] around a pivot drawn from the subarray. Although we can choose any element in the subarray as the pivot, it's easy to implement partitioning if we choose the rightmost element of the subarray, A[r], as the pivot.</p>

<p>In practice, quicksort outperforms merge sort, and it significantly outperforms selection sort and insertion sort.</p>


---

Keep in mind:
<ul>
  <li> In merge sort, you never see a subarray with no elements, but you can in quicksort, if the other elements in the subarray are all less than the pivot or all greater than the pivot.</li>
</ul>


