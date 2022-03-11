function bfs(graph, startNode) {
    const queue = [startNode]
    while (queue.length > 0) {
        //remove the first element of the queue
        const current = queue.shift()
        //visit the neighbors of that first element and add them to the queue
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
        return current //returns nodes in order of viewing
    }
}
