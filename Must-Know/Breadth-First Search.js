/*
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
