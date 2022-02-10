/* This technique shows how a nested for loop in some problems can be converted to a single for loop to reduce the time complexity.
The algorithm below is one of many examples of implementation of a sliding window alrorithm. In this example, we try to find the subarray in 'arr' (i.e. 
the contiguous elements) of length 'k' that sum up to the biggest value.
*/


function maxSumSubarray(arr, k) {
  let max = 0;
  let sum = 0;
  //find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  //iterate the array once and increment the right edge
  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    //set max to be max between itself ans sum
    max = Math.max(max, sum);
  }
  return max;
}

