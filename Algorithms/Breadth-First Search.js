function breadthFirstSearch(graph, startNode) {
    const queue = [startNode]
    while (queue.length > 0) {
        const current = queue.shift()
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
        return current //returns nodes in order of viewing
    }
}
