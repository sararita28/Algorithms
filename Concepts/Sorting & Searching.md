<h2>Sorting & Searching</h2>
<p>Many sorting and searching problems are tweaks of the well-known algorithms. A good approach is to run through the different sorting algorithms and see if 
  one applies particularly well.</p>
 
 <h3>Common Sorting Algorithms</h3>
<ul>
  <li><b>Bubble Sort | Runtime: O(n^2) | Memory: O(1) </b>: start at the beginning, continuously making sweeps of the array until it is sorted. In doing so, the
  smaller items slowly "bubble" up to the beginning of the list.</li>
  <li><b>Selection Sort | Runtime: O(n^2) | Memory: O(1) </b>: simple but inefficient. Find the smallest element using a linear scan and move it to the front.
  and so on... till it's sorted.</li>
  <li><b>Merge sort | Runtime: O(nlogn) | Memory: Depends </b>: divides the array in half, sorts each then merges them together. It's the "merge" part that does
   all the heavy lifting. The merge method operates by copying all the elements from the target array segment into a helper array, keeping track of where the start 
    of the left and right halves should be (helperleft and helperRight). We then iterate through helper, copying the smaller element from each half into the array. 
    At the end, we copy any remaining elements into the target array.</li>
  <li><b>Quick sort | Runtime: O(n^2) | Memory: O(logn) </b>: pick a random element and partition the array such that all numbers that are less than the element 
  come before all numbers that are greater than it. If we repeatedly partition the array (and its sub-arrays) around an element, the array will eventually become 
    sorted.</li>
  <li><b>Radix sort | Runtime: O(kn) *n is the number of elements and k is the number of passes of the sorting algorithm. :</b> sorting algorithm for integers (and some other data types) that takes advantage of the fact that integers have a finite 
    number of bits. We iterate through each digit of the number, grouping numbers by each digit.</li>
</ul>
 
 
 ---
 
 Keep in Mind:
 <ul>
  <li> Merge Sort, Quick Sort and Bucket Sort are the most commonly used sorting algorithms in interviews.</li>
</ul>
