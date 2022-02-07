/*
Binary Search
Look for an element x in a sorted array by first comparing x to the midpoint of the array. If x is less than the midpoint, then we search the left half of 
the array. If x is greater than the midpoint, then we search the right half of the array. We then repeat this process, treating the left and right halves as 
subarrays. Again, we compare x to the midpoint of this subarray and then search either its left or right side. We repeat this process until we either find x 
or the subarray has size 0.
In the code below, we are looking for the element n in the sorted array 'elements'. We're maintaining 4 variables that we are adjusting as needed. 
If n is within the array it will return the elements as well as how many tries it took us to find it. Else, it returns -1
*/

let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(elements, n) {
  let high = elements.length - 1;
  let low = 0;
  let mid;
  let count = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (elements[mid] == n) {
      count++;
      return `found ${elements[mid]} after ${count} counts`;
    }
    if (elements[mid] < n) {
      count++;
      low = mid + 1;
    }
    if (elements[mid] > n) {
      count++;
      high = mid - 1;
    }
  }
  return -1;
}
