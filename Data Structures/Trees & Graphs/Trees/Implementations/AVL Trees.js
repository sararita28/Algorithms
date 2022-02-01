//Heavily flawed code. Come back and fix this

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  //get the height of the root H(root)
  getHeight(root) {
    let height = 0;
    if (root === null) {
      height--;
    } else {
      height =
        Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }
    return height;
  }

  //get the BF (balanced factor)
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  //create a balance function if BF is not 0, 1 or -1 (we can do 4 different rotations RR, LL, RL, and LR)
  balance(node) {
    if (
      this.getBalanceFactor(node) == -1 ||
      this.getBalanceFactor(node) == 0 ||
      this.getBalanceFactor(node) == 1
    )
      return;

    if (this.getBalanceFactor(node) > 1) {
      if (getBalanceFactor(node.left) > 0) {
        return this.rotationRR(node);
      } else if (this.getBalanceFactor(node.left) < 0) {
        return this.rotationLR(node);
      }
    } else if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) < 0) {
        return this.rotationLL(node);
      } else if (this.getBalanceFactor(node.right) > 0) {
        return this.rotationRL(node);
      }
    }
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
    //    this.balance(node);
    return searchTree(node);
  }

  //remove a node
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
        balance(node);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        balance(node);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        balance(node);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  //rotation methods

  rotationLL(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  rotationRR(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotationLR(node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
  }

  rotationRL(node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
  }
}

const avl = new AVL();
//  remove(data) {add(data) {balance(node) {getBalanceFactor(node) {getHeight(root);
avl.add(0);
avl.add();
avl.add(4);
console.log(avl);
avl.add(9);
