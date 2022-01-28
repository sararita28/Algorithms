<h2>AVL Trees</h2>
<p>An <b>AVL tree</b> is a self-balancing binary search tree.</p>

<h3>Inserting Elements into an AVL Tree</h3>
<p>An <b>AVL tree</b> is one of many types of Balanced Binary Search Trees which allows for O(logn) insertion, deletion and search operations. Other types of BBST 
  include: 2-3 tree, AA tree, scapegoat tree, red-black tree.</p>
<p>The property which keeps an AVL tree balanced is called the <b>balanced factor (BF)</b>. BF(node)=H(node.right)-H(node.left) where H(x) is the height of node x 
  (recall: H(x) is calculated as the number of edges between x and the furthest leaf). The requirement in the AVL which forces it to remain balanced is the 
  requirement that the balance factor is always either -1, 0 or +1.</p>

<h4>Removing Elements from an AVL Tree</h4>
<p>The AVL tree removal implementation is similar to the BST one except that you need to add 2 lines of code to ensure that the tree remains balanced and that 
  the bounce factor and height values remain up to date.</p>
