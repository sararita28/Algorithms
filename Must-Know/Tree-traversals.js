//Pre-order traversal
//visits current before children, prints value before the recursive calls
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
//visits children then current, prints value after the recursive calls
function postOrder(root) {
  let result = [];
  let current = root;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    //if it's a leaf push it to the result array
    result.push(node.val);
  };

  traverse(current);
  return result;
}

//Level-order traversal
//level-order and BFS are essentially the same thing
function levelOrder(root) {
  let visited = [];
  let queue = [];
  let current = root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    visited.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return visited;
}
