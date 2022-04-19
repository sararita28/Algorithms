//Example of a function that uses recursion. Base case is when n is 0. Function recursively calls itself till condition is met (i.e. n++ <10)
let n = 0;

function countUp() {
  console.log(n);
  if (n++ < 10) {
    countUp(n);
  }
}
countUp();

/*
Backtracking involves trying possibilities along a 'search path' and cutting off paths that do not yield a solution.
The 3 core ideas of backtracking are:
- The choice: What's the fundamental subproblem and choice being made at every step of the algorithm to advance to a solution? What's the core decision 
space? (for loops are for exploration within the stack frame). Our fudamental choice is choosing from a decision space what we want to express. Once we 
express that, we recurse on that decision. If the decision doesn't work, we come back/backtrack and undo it and make another choice.
- The constraints: When is a path no longer fruitful? If it is determined a path will no longer yield a solution an algorithm is said to "backtrack" when 
it returns control to a previous decision that can be advanced from.
- The goal: When do we know that the solution has been found?
*/

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

/*
Permutation means arranging things with an order. Permutations are best visualized with trees. The complexity of combinatorial problems often grows 
rapidly with the size of the problem. In combinatorial search problems, search space is in the shape of a tree. The tree that represents all the 
possible states is called a State-space Tree. Each node of the state-space tree represents a state we can reach in a combinatorial search (by doing 
a particular combination). Leaf nodes are the solutions to the problem. Combinatorial search problems boil down to DFS/backtracking on the state-space 
tree. Since the search space can be quite large, we often have to "prune" the tree, i.e. discard branches. 
Three steps to conquer combinatorial search problems: 
1. Identify the state(s).
2. Draw the state-space tree.
3. DFS/backtrack on the state-space tree.

backtracking template (for step 3):

function dfs(node, state):
    if state is a solution:
        report(state) # e.g. add state to final result list
        return

    for child in children:
        if child is a part of a potential solution:
            state.add(child) # make move
            dfs(child, state)
            state.remove(child)
*/


