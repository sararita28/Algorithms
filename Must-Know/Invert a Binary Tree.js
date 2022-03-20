//Recursively
function invertBinaryTree(head) {
  if (head) {
    var temp = head.left;
    head.left = head.right;
    head.right = temp;

    invertBinaryTree(head.left);
    invertBinaryTree(head.right);
  }
  return head;
}


//Iteratively (using pre-order traversal)
function invertBinaryTree(head) {
    if (head == null) return
    let stack = [head]
    while (stack.length > 0) {
        // pop top node from stack
        let current = stack.pop()

        swap(current.left, current.right)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
}

