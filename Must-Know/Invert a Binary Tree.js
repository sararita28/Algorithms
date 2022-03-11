//Recursively
function invertBinaryTree(head) {
  if (head) {
    var temp = head.left;
    head.left = head.right;
    head.right = temp;

    invertTree(head.left);
    invertTree(head.right);
  }
  return head;
}


//Iteratively (using pre-order traversal)
function invertBinaryTree(root) {
    if (root == null) return
    let stack = [root]
    while (stack.length > 0) {
        // pop top node from stack
        let current = stack.pop()

        swap(current.left, current.right)
        if (current.right) stack.push(current.right)
        if (curr.left) stack.push(current.left)
    }
}

