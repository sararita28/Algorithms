# Dijkstra's Algorithm
### When to use it: 
Given a weighted graph, what is fastest way to compute the shortest path from a node to every other node?
What we mean by weighted graph is that every edge is now assigned a weight that and our distance increases by the weight instead of 1. 
This problem means that graph theory algorithms such as Vanilla Breadth First Search don't work anymore as they are designed for unweighted graphs.
The Dijkstra's algorithm uses of a priority queue to store nodes by the distance from our root node. When we pop a node and its distance, we know that
the distance is the shortest distance from our source node to the node. And we update the distances of the neighbours of the node by decrease_priority 
to make sure the distances of other nodes in the priority queue is the shortest from source node. Each time we pop a node from the queue it takes time
logarithmic to the size of the queue. Therefore, our final time complexity is O(nlog(e)) as maintaining the edges in the queue takes logarithmic time.
### So, what are the steps of this algorithm?
<ol>
<li>Begin with creating a set of nodes, all of which are unvisited.</li>
<li>Assign every node an initial distance value (this will be set to zero for the starting node, and infinity for all other nodes).</li>
<li>Set the starting node as the current node.</li>
<li>For each current node, calculate the tentative distance to each of its unvisited neighbor nodes. Add the distance from the current node to the neighbor node to the distance from the starting node.</li>
<li>When all unvisited neighbor nodes of the current node have been mapped, mark the current node as visited, removing it from the unvisited set. Visited nodes will not be checked again.</li>
<li>If the specific destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance from the start node to the nodes in the unvisited set is infinity (meaning there is no connection between the start node and remaining unvisited nodes), then stop. The algorithm has finished.</li>
<li>Otherwise, select the unvisited node with the smallest tentative distance, set it as the new “current node”, and repeat the the process of calculating the tentative distance to each of its unvisited neighbor nodes.</li>
  </ol>
  
  ```
let findShortestPath = (graph, startNode, endNode) => {
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]);
  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    parents[child] = startNode;
  }

  let visited = [];
  let node = shortestDistanceNode(distances, visited);

  while (node) {
    let distance = distances[node];
    let children = graph[node];

    for (let child in children) {
      if (String(child) === String(startNode)) continue;
      else {
        let newdistance = distance + children[child];
        if (!distances[child] || distances[child] > newdistance) {
          distances[child] = newdistance;
          parents[child] = node;
        }
      }
    }
    visited.push(node);
    node = shortestDistanceNode(distances, visited);
  }

  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  let results = {
    distance: distances[endNode],
    path: shortestPath,
  };
  return results;
};

//helper that helps identify the nearest neighboring node.
let shortestDistanceNode = (distances, visited) => {
  let shortest = null;

  for (let node in distances) {
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];
    if (currentIsShortest && !visited.includes(node)) shortest = node;
  }
  return shortest;
};

  ```
