/*In this BST implementation we used the BST definition that does not allow duplicates. We can easily change that by adding an equal sign where needed 
depending on where we want our duplicates to be (i.e. left or right subtree) */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //adding a new node
  add(data) {
    const node = this.root;
    if (node == null) return (this.root = new Node(data));

    //if root is not null create a recursive function to figure out where to put the node
    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left == null) {
          return (node.left = new Node(data));
        } else {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right == null) {
          return (node.right = new Node(data));
        } else {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }

  //finding a node
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  //finding the minimum (in BST the min node is always the leftmost node)
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data; //when we break out of this while loop, the current element will be the leftmost element, hence the minimum element
  }

  //finding the maximum (in BST the max node is always the rightmost node)
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  //removing a node
  remove(data) {
    const removeNode = (node, data) => {
      if (node == null) return null; // if tree is empty
      if (data == node.data) {
        if (node.left == null && node.right == null) return null; //if node has no children
        if (node.left == null) return node.right; //if node has no left child
        if (node.right == null) return node.left; //if node has no right child
        //if node has 2 children, replace it with leftmost child of its right child
        let temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}
