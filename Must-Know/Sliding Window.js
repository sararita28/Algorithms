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


/*
When you have a problem that mentions subarray/substring with EXACTLY K different numbers/letters there's one variation of the sliding window that you could implement.
Note that: exactly(K) = atMost(K) - atMost(K-1) 
What you want to do is write a sliding window helper function that will return the number of subarrays with at most K distinct elements.
Example: the following code is the solution to the 1248. Count number of nice subarrays LC question
*/

const numberOfSubarrays = (nums, k) => {
    return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
    let res = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        k -= nums[right] % 2;
        while (k < 0) k += nums[left++] % 2;
        res += right - left + 1;
    }
    return res;
}
