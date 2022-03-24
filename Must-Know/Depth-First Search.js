/*
You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing.
The Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do three things:
Decide whether to process the current node now (pre-order), or between processing two children (in-order) or after processing both children (post-order).
Make two recursive calls for both the children of the current node to process them.

*/

//Iterative

function dfs(graph, startNode) {
  const stack = [startNode];
  while (stack.length > 0) {
    //remove the last element of the stack and add its neighbors to the stack
    const current = stack.pop();
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
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
