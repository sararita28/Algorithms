
//Iterative

function dfs(graph, startNode) {
  const stack = [startNode];
  while (stack.length > 0) {
    const current = stack.pop();
    for (let neighbor of graph[current]) {
      //push neighbors to top of stack
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
