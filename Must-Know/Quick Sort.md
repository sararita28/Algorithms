Runtime: O(n^2) | Memory: O(logn)
Pick a random element and partition the array such that all numbers that are less than the element come before all numbers that are greater than it. 
If we repeatedly partition the array (and its sub-arrays) around an element, the array will eventually become sorted.

Quick sort is a divide and conquer algorithms(i.e. recursive algorithms). In quicksort, the combine step doesn't do anything; the real work of quicksort 
happens during the divide step(in pivot selection to be precise), which partitions subarray array[p..r] around a pivot drawn from the subarray. Although we 
can choose any element in the subarray as the pivot, it's easy to implement partitioning if we choose the rightmost element of the subarray, A[r], as the pivot.

In practice, quicksort outperforms merge sort, and it significantly outperforms selection sort and insertion sort.

---

Keep in mind:
In merge sort, you never see a subarray with no elements, but you can in quicksort, if the other elements in the subarray are all less than the pivot or all 
greater than the pivot.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif" />

```
function swap(array, left, right) {
//  function that swaps 2 elements
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function partition(array, left, right) {
  //pivot is usually the rightmost element but for this example we chose the middle
  let pivot = array[Math.floor((right + left) / 2)]
  let [i, j] = [left, right]
  
  while (i <= j) {
    while (array[i] < pivot) i++;
    while (array[j] > pivot) j--;
    if (i <= j) {
      swap(array, i, j); 
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right); //index returned from partition
    
    //more elements on the left side of the pivot
    if (left < index - 1) quickSort(array, left, index - 1);
    
    //more elements on the right side of the pivot
    if (index < right) quickSort(array, index, right);
  }
  return array;
}
```
