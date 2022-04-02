//Pre-rder, inorder and post-order traversals are all forms of DFS. They can be implemented recursively or iteratively.

//Pre-order traversal
//visits current before children (left then right), prints value before the recursive calls
function preOrder(root) {
  let result = [];
  let current = root;

  const traverse = (node) => {
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return result;
}

//Inorder traversal
//visits left then current then right, prints value between the recursive calls
function inOrder(root) {
  let result = [];
  let current = root;

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return result;
}

//Post-order traversal
//visits children (left then right) then current, prints value after the recursive calls
function postOrder(root) {
  let result = [];
  let current = root;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  };

  traverse(current);
  return result;
}

//Level-order traversal
//level-order and BFS are essentially the same thing
function levelOrder(root) {
  let result = [], queue = [];
  let current = root;
  queue.push(current);
  
  while (queue.length) {
    current = queue.shift();
    result.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
}


// Say you have the following tree (which happens to be a BST)
/////////////////////  20 //////////////////////
///////////  14  //////////////  57  ///////////
//////  9  ////  19  ////  31  //////  62  /////
//  3  //  11  //////////////////////////  72 //


/* Results:
-Pre-order: [ 20, 14, 9, 3, 11, 19, 57, 31, 62, 72 ]
-Inorder: [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]
-Post-order: [ 3, 11, 9, 19, 14, 31, 72, 62, 57, 20 ]
-Level order/bfs: [ 20, 14, 57, 9, 19, 31, 62, 3, 11, 72 ]
*/
