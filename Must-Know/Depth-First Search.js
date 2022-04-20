/*
You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing.
The Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do three things:
Decide whether to process the current node now (pre-order), or between processing two children (in-order) or after processing both children (post-order).
Make two recursive calls for both the children of the current node to process them.
To view the implementations of graph/tree traversals listed above go to : https://github.com/sararita28/Data-Structures-and-Algorithms/blob/main/Must-Know/Tree-traversals.js
The key to solving tree problems using DFS is to think from the perspective of a node instead of looking at the whole tree. Reason from a node, 
decide how the current node should be proceeded, then recurse on children and let recursion take care of the rest. When you are a node, the only 
things you know are 1) your value and 2) how to get to your children. So the recursive function you write manipulates these things.
Two things we need to decide to define the function:
1. What do we want to return after visiting a node? (use return value to pass information from children to parent) 
2. What state do we need to maintain to compute the return value for the current node? (use state to pass information from parent to children)
DFS uses less memory than BFS for wide graphs, since BFS has to keep all the nodes in the queue, and for wide graphs this can be quite large.
*/

//Iterative

function dfs(graph, startNode) {
  const stack = [startNode];
  while (stack.length > 0) {
    //remove the last element of the stack and add its neighbors to the stack
    const current = stack.pop();
    for (let neighbor of graph[current]) stack.push(neighbor);
    return current; //returns nodes in order of viewing
  }
}

//Recursive

function recursiveDfs(graph, startNode) {
  console.log(startNode); // logs nodes in order of vieweing

  for (let neighbor of graph[startNode]) {
    recursiveDfs(graph, neighbor);
  }
}
