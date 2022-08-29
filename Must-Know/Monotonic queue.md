A monotonic queue is a DS where the order of the elements is strictly increasing or strictly decreasing. Note that sometimes monotonic queues may contain
duplicate values (even though this goes against the strict monotonic condition).

Strictly increasing monotonic queue pseudocode:
```
function monotonicQ (input array)
    let Q be monotonic queue
    let result be output array
    Loop through input array //with indices
        while Q is not empty and the current element is greater than last elemenent of queue 
            pop from Q
        add index to Q
        if reached a solution 
            add to result
        if out of bounds
            shift from Q
    return result
```

Below is an answer example to the '239. Sliding Window Maximum' leetcode question using monotonic queue:


```
var maxSlidingWindow = function(nums, k) {
    const queue = [], result = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop();
        queue.push(i);
        if (queue[0] === i - k) queue.shift();
        if (i >= k - 1) result.push(nums[queue[0]]);
    }
    return result;    
};
```
How the code works: We start by maintaining two arrays; a result array which will be our output, and a queue array (this is where we'll store indices of 
our input nums elements as we're looping through it.
Let's loop through our nums array and say: while our queue is not empty AND the last element whose index was added to the queue is less than or equal to 
the current element, we pop it. 
We continuously add indices to our queue.
If our window is greater than k we dequeue the first element from our queue (i.e we remove it).
If we have a valid window size, we push the first element (which should be the greatest one) to our result array.
