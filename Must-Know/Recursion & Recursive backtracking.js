//Example of a function that uses recursion. Base case is when n is 0. Function recursively calls itself till condition is met (i.e. n++ <10)
let n = 0;

function countUp() {
  console.log(n);
  if (n++ < 10) {
    countUp(n);
  }
}
countUp();



//Below is a code example to the '46. Permutations' Leetcode question, using recursive backtracking
var permute = function(nums) {
    dfs(nums, result=[], index=0);
    return result;
};

function dfs(nums, result, index) {
    if (index === nums.length - 1) return result.push(nums.slice(0));
    
    for (let i = index; i < nums.length; i++) {
       [nums[i], nums[index]] = [nums[index], nums[i]]
        dfs(nums, result, index + 1);
        [nums[i], nums[index]] = [nums[index], nums[i]]
    }
}
