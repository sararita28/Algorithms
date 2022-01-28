class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
} 

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
//      ----------------------- Inserting a Node -----------------------
      
      // helper method to create a new node with a value data to be inserted and calls insertNode
      insert(data) {
      
      var newNode = new Node(data);
      // if root is null then node will be added to the tree and made root
      if (this.root === null) {
        this.root = newNode;
      } else {
      // if not root, it'll find the correct position in the tree to add the node
        this.insertNode(this.root, newNode);
      }
      // insert a node with given data in found location
      insertNode(node, newNode) {
      
        /if data is less than node
        if (newNode.data < node.data) {
        
          // go to left subtree and if null
          if (node.left === null) {
          
          node.left = newNode; // insert node here
          } else {
            
            this.insertNode(node.left, newNode); //  if left not null, recur till null is found
          }
          
        } else {
        
          // go to right subtree and if null 
          if (node.right === null) {
          
            node.right = newNode; // insert node here
          } else {
          
            this.insertNode(node.right, newNode); // if right is null recur till null is found
          }
      }
      
      }
      
 //           ----------------------- Removing a Node -----------------------
      remove(data) {
         
         //root is re-initialized with root of a modified tree
         this.root = this.removeNode(this.root, data);
      }
      
      //helper method to remove a node with a given data (recurs over the tree to find the data and removes it)
      removeNode(node, key) {
        
        //if root is null then tree is empty
        if (node === null) {
          
          return null;
        //else if the data to be deleted is less than root's data
        } else if (key < node.data) {
          
          //then go to left subtree
          node.left = this.removeNode(node.left, key);
          return node;
        //else if the data to be deleted is greater than root's data
        } else if ( key > node.data) {
        
          //then go to right subtree
          node.right = this.removeNode(node.right, key);
          return node;
        } else {   // if data is similar to the root's data
        
          if (node.left === null && node.right === null) { //if node has no children
            
            //delete node
            node = null;
            return node;
          }
          // if node has 1 child
          if (node.left === null) {
            
            node = node.right;
            return node;
          } else if ( node.right === null) {
            
            node = node.left;
            return node;
          }
          
          // if node has 2 children, store minimum node of right subtree in 'aux'
          var aux = this.findMinNode(node.right);
          node.data = aux.data;
          node.right = this.removeNode(node.right, aux.data);
          return node;
        }
      }
//            ----------------------- Perform inorder traversal -----------------------
      inorder(node){
      
        if (node !== null) {
        
          this.inorder(node.left);
          console.log(node.data);
          this.inorder(node.right);
        }
      }
//            ----------------------- Perform preorder traversal -----------------------
      preorder(node){
        
        if (node !== null) {
        
          console.log(node.data);
          this.preorder(node.left);
          this.preorder(node.right);
        }
      }
//            ----------------------- Perform postorder traversal -----------------------
      postorder(node){
      
        if (node !== null) {
        
          this.preorder(node.left);
          this.preorder(node.right);
          console.log(node.data);
        }
      }
      
//            ----------------------- Finds minimum node -----------------------
      findMinNode(node){
      
    // if left of a node is null then it must be minimum node
    if(node.left === null) {
        return node;
    } else {
        return this.findMinNode(node.left);
    }     
//            ----------------------- Returns root node -----------------------
    getRootNode(){
    
    return this.root;
    }

//            ----------------------- Search for node with given data -----------------------
    search(node, data){
    
     // if tree is empty return null
      if (node === null) {

          return null;

      // if data is less than node's data move left
      } else if (data < node.data) {
          return this.search(node.left, data);

      // if data is more than node's data move right
      } else if(data > node.data) {
          return this.search(node.right, data);

      // if data is equal to the node data return node
      } else {
          return node;
      }
    }

}
