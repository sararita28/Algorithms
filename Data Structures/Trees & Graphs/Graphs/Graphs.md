<h2>Graphs</h2>
<img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/undirectedgraph.png'/>
<p><b>A tree is actually a type of graph, but not all graphs are trees</b>. Simply put, a tree is a connected graph without cycles. A <b>graph</b> is simply a 
  collection of nodes with edges between (some of) them. 
  
  <h3>Types of Graphs</h3>
  <p>Graphs can either be:</p>
  <ul>
  <li><b>Directed</b>: directed edges are like a one-way street.</li>
  <li><b>Undirected</b>: undirected edges are like a two-way street.</li>
  </ul>
  
  <p>- A graph might consist of multiple isolated subgraphs.</p>
  <p>- If there is a path between every pair of vertices, it is called a <b>"connected graph".</b></p>
  <p>- A graph can also have cycles (or not). An "acyclic graph" is one without cycles.</p>
  
  <img width="500px" src="https://sites.google.com/a/cs.christuniversity.in/discrete-mathematics-lectures/_/rsrc/1409480658489/graphs/directed-and-undirected-graph/dir.png"></img>
  
  <h3>Representing Graphs</h3>
  <p>In terms of programming, there are two common ways to represent a graph.
  <ul>
    <li><b>Adjacency List:</b> This is the most common way to represent a graph. Every vertex (or node) stores a list of adjacent vertices. In an undirected graph, 
      an edge like (a, b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices.</li>
    <li><b>Adjacency Matrices:</b> An adjacency matrix is an NxN boolean matrix (where N is the number of nodes), where a true value at matrix[ i] [j] indicates an 
      edge from node i to node j. (You can also use an integer matrix with Os and 1 s.) In an undirected graph, an adjacency matrix will be symmetric. In a directed 
      graph, it will not (necessarily) be.</li>
  </ul>
  
  <img src="https://algorithmtutor.com/images/graph_representation_directed.png" width="800px"></img>
  
  <p><em>The same graph algorithms that are used on adjacency lists (breadth-first search, etc.) can be performed with adjacency matrices, but they may be somewhat 
  less efficient. <b>In the adjacency list representation, you can easily iterate through the neighbors of a node</b>. In the adjacency matrix representation, you will need to iterate through all the nodes to identify a node's neighbors.</em></p>
  
  <h3>Searching Graphs</h3>
  <p>The 2 most common ways to search a graph are <b>depth-first search</b> and <b>breadth-first search.</b></p>
  <ul>
    <li>In <b>depth-first search</b> we start at the root (or another arbitrarily selected node) and explore each branch completely before moving onto the next branch. (We go deep before we go wide). <b>DFS is often preferred if we want to visit every node in the graph</b>. In DFS, we visit a node <i>a</i> and then iterate through each of <i>a</i>'s neighbors. When visiting a node <i>b</i> that is a neighbor of <i>a</i>, we visit all of </i>b</i>'s neighbors before going on to <i>a</i>'s other neighbors. Note that pre-order and other forms of tree traversal are a form of DFS. The key difference is that when implementing this algorithm for a graph, we must check if the node has been visited. If we don't, we risk getting stuck in an infinite loop. <br>
The key to solving tree problems using DFS is to think from the perspective of a node instead of looking at the whole tree. Reason from a node, decide how the current node should be proceeded, then recurse on children and let recursion take care of the rest. When you are a node, the only things you know are 1) your value and 2) how to get to your children. So the recursive function you write manipulates these things.
DFS uses less memory than BFS for wide graphs, since BFS has to keep all the nodes in the queue, and for wide graphs this can be quite large.
</p></li>
    </br>
    <li>In <b>breadth-first search</b> we start at the root (or another arbitrarily selected node) and explore each neighbor before moving onto any of their children. (We go wide before we go deep). If we want to find the shortest path (or just any path) between two nodes, BFS is generally better. BFS is a bit less intuitive. <b>The main tripping point is the (false) assumption that BFS is recursive. It's not. Instead, it uses a queue.</b> In BFS, node <i>a</i> visits each of <i>a</i>'s neighbors before visiting any of their children. An iterative solution involving a queue usually works best. <b>If you are asked to implement BFS, the key thing to remember is the use of the queue. The rest of the algorithm flows from this fact.</b></li>
  </ul>
  
  <h3>Bidirectional Search</h3>
  <p><i>Bidirectional Search</i> is used to find the shortest path between a source and destination node. It operates by essentially running two simultaneous breadth-first searches, one from each node. When their searches collide, we have found a path.</p>
  <img src="https://camo.githubusercontent.com/451bdecc426c928b509f2213185b2c545398d57616618d017ed44e12f9562cff/68747470733a2f2f6261636f6e697a65722d6173736574732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f62646266732e706e67"></img>
  
  <p>To see why this is faster, consider a graph where every node has at most 'k' adjacent nodes and the shortest path from node 's' to node 't' has length 'd'.</p>
  <ul>
    <li>In traditional breadth-first search, we would search up to k nodes in the first "level" of the search. In the second level, we would search up to k nodes for each of those first k nodes, so k^2 nodes total (thus far). We would do this d times, so that's O(k^d) nodes.</li>
    <li>In bidirectional search, we have two searches that collide after approximately d/2 levels (the midpoint of the path). The search from s visits approximately k^(d/2), as does the search from t. That's approximately 2 k(d/2), or O(k^(d/2)), nodes total. This might seem like a minor difference, but it's not. It's huge. Recall that (k^(d/2))*(k^(d/2))=k^d The bidirectional search is actually faster by a factor of k^(d/2). Put another way: if our system could only support searching "friend of friend" paths in breadth-first search, it could now likely support "friend of friend of friend of friend" paths. We can support paths that are twice as long.</li>
  </ul>
  
  <h3>Topological sort (a.k.a top sort)</h3>
  <p><b>Top sort</b> is an algorithm that will give us a topological ordering on a directed graph. A <b>topological ordering</b> is an ordering of the nodes in a directed graph where, for each directed edge from node A to B, node A appears before B in the ordering. The top sort algorithm can find topological ordering in O(V+E) time. <b><i>Important note:</b> Topological orderings are NOT unique!</i></p>
  <p>The motivation behind top sort is that many real world situations can be modelled as graphs with directed edges where some events must occur before others. Some examples of usage of top sort include but are not limited to: school class prerequisites, program dependencies, event scheduling, assembly instructions...</p>
  <p>The only type of graph which has a valid topological ordering is a Directed Acyclic Graph(DAG). That is, a graph with directed edges and no cycles.</p>
  <p><b>Q:</b> How do I verify that my graph does not contain a directed cycle?</p> 
  <p><b>A:</b> One method is to use Tarjan's strongly connected component algorithm which can be used to find these cycles.</p>
  
  ---
  
  Keep in mind: 
  <ul> 
  <li>Unlike in a tree, you can't necessarily reach all the nodes from a single node in a graph.</li>
  <li>DFS is often preferred if we want to visit every node in the graph.</li>
  <li> BFS is often preferred If we want to find the shortest path (or just any path) between two nodes.</li>
  <li>BFS is a bit less intuitive.</li>
  <li>If you are asked to implement BFS, the key thing to remember is the use of the queue. </li>
  <li>DFS uses a stack (often via recursion) while BFS uses a queue.</li>
  <li>It's very common to use Hash maps in graph problems.</li>
  <li>One way to verify if a graph doesn't contain directed cycles is by using Tarjan's algorithm</li>
  </ul>
