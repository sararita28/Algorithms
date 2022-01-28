<h2>Binary Trees and Binary Search Trees</h3>

<p>Among the long list of tree DS, you have <b>binary trees</b> and <b>binary search trees</b>.</p>
<p>A <b>binary tree </b>is a tree for which every node has at most 2 children. A <b>binary search tree </b>is a binary tree that satisfies the <b>BST invarient:</b> the left subtree has elements smaller or equal than the value of the current node and the right subtree has elements larger than the value of the current node. <b><i>And this would depend on if you allow for duplicate values or not (usually we're only interested in unique elements inside our tree)*</i>.</b> Some examples of BT and BST usage include but are not limited to: implementation of some map and set ADTs, red black trees, AVL trees, Splay trees, binary heaps, syntax trees, treap...</p>
<p><i>* Note: The definition of a binary search tree can vary slightly with respect to equality. Under some defi­ nitions, the tree cannot have duplicate values. In others, the duplicate values will be on the right or can be on either side. All are valid definitions.</i></p>
<img src="https://cdn.educba.com/academy/wp-content/uploads/2021/05/Binary-Tree-vs-Binary-Search-Tree.jpg"></img>

<p><b>BST Complexity</b></p>
<table>
  <tr>
    <td>Insert</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Delete</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
  </tr>
</table>
 
 ---

<h3> Balanced Binary Search Trees (BBST)</h3>
<p>A <b>balanced binary Search tree</b> is a self-balancing binary search tree. It adjusts itself in order to maintain a low (logarithmic) height allowing for faster operations such as insertions and deletions.</p>

<p><b>BBST Complexity</b></p>
<table>
  <tr>
    <td>Insert</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Delete</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>O(logn)</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(logn)</td>
  </tr>
</table>

<p>Central to how nearly all BBST keep themselves balanced is the concept of <b>tree rotations</b>.</p>
<p>The secret ingredient to most BBST algorithms is the clever use of 2 things: <b>a tree invarient</b> and <b>tree rotations</b>.</p>
<p>A tree invarient is a property/rule you impose on your tree that it must meet after every operation. To ensure that the invarient is always satisfied a series of tree rotations are normally applied. You can rotate/transform the values and nodes in a tree as you please as long as the BST invarient remaints satisfied (since BBSTs are BSTs).</p>
<p>In some BBST implementations where you need to access the parent/uncle nodes it's convenient for nodes to also have a reference to the parent nodes, but this complicates tree rotations because you would have to update a lot more pointers</p>

---

<ul> Keep in mind: 
  <li>Binary trees do fairly well with ordering.</li>
</ul>