/*
BFS is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root 
and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep 
track of the child nodes that were encountered but not yet explored.
BFS is guaranteed to find a solution node if one exists. In contrast, (plain) DFS, which explores the node branch as far as possible 
before backtracking and expanding other nodes, may get lost in an infinite branch and never make it to the solution node. Iterative deepening DFS avoids 
the latter drawback at the price of exploring the tree's top parts over and over again. On the other hand, both DFS algorithms get along without extra 
memory.

Below is the pseudocode for bfs:
```
procedure BFS(G, root) is
       let Q be a queue
       label root as explored
       Q.enqueue(root)
       while Q is not empty do
           v := Q.dequeue()
           if v is the goal then
               return v
           for all edges from v to w in G.adjacentEdges(v) do
              if w is not labeled as explored then
                  label w as explored
                  Q.enqueue(w)
```

Uses a queue to keep track of all the nodes of a level before jumping onto the next level. Any problem involving the traversal of a tree in a 
level-by-level order can be efficiently solved using this approach. The Tree BFS pattern works by pushing the root node to the queue and then 
continually iterating until the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that node. 
After removing each node from the queue, we also insert all of its children into the queue.
Important things to remember:
- We need at least one element to kick start the process
*/

function bfs(graph, startNode) {
    const queue = [startNode]
    while (queue.length > 0) {
        //store the first element of the queue in variable
        const current = queue.shift()
        //visit the neighbors of that first element and add them to the queue
        for (let neighbor of graph[current]) queue.push(neighbor)
        return current //returns nodes in order of viewing
    }
}
