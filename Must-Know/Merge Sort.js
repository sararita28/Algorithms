/* Merge Sort:
Runtime: O(nlogn) | Memory: Depends
Merge sort is a divide and conquer algorithms(i.e. recursive algorithms). Divides the array in half, sorts each then merges them together. In merge sort, 
the divide step doesn't do anything important; it's the "merge" part that does all the heavy lifting. The merge method operates by copying all the elements 
from the target array segment into a helper array, keeping track of where the start of the left and right halves should be (helperleft and helperRight). 
We then iterate through helper, copying the smaller element from each half into the array. At the end, we copy any remaining elements into the target array. 
In merge sort, you never see a subarray with no elements.
The steps of mergesort are : 
1. Recursively split the input array in half until a subarray with only 1 element is produced.
2. Merge each sorted subarray together to produce the final sorted array.
*/

//helper function
function merge(left, right) {
  //left and right are 2 sorted subarrays that we will merged into a single array 'arr'
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  //this function will recursively call itself to divide the array till there's 1 element left, since arrays of 1 elements are considered to be sorted
  let mid = Math.floor(array.length / 2);
  //split the array into 2 subarrays
  let left = array.splice(0, mid);
  //if there's 1 element in the array, return it
  if (array.length < 2) return array;

  return merge(mergeSort(left), mergeSort(array));
}
