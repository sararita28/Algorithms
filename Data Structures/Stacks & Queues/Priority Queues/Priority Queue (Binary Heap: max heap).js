//Return to this once you've studied Heaps

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  //helper method to swap 2 items
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
    return this.items;
  }

  //helper method to bubble up element
  bubbleUp() {
    //get index of (last) inserted element
    let index = this.items.length - 1;
    //loop while index is not 0 or element no loger needs to bubble up
    while (index > 0) {
      //get parent index
      let parentIndex = Math.floor((index - 1) / 2);
      //if items is greater than parent, swap the two
      if (this.items[parentIndex].priority > this.items[index].priority) {
        //swap with helper method
        this.swap(index, parentIndex);
        //update index to be parent index
        index = parentIndex;
      } else {
        break;
      }
    }
    return 0;
  }

  //helper method to bubble down element
  bubbleDown() {
    let parentIndex = 0;
    const length = this.items.length;
    const elementPriority = this.items[0].priority;
    //loop breaks if no swaps are needed
    while (true) {
      //get indexes of child elements
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChildPriority, rightChildPriority;
      let indexToSwap = null;
      // if left child exists, and is greater than the element, plan to swap with the left child index
      if (leftChildIndex < length) {
        leftChildPriority = this.items[leftChildIndex].priority;
        if (leftChildPriority < elementPriority) {
          indexToSwap = leftChildIndex;
        }
      }
      //if right child exists
      if (rightChildIndex < length) {
        rightChildPriority = this.items[rightChildIndex].priority;

        if (
          //if right child is greater than element and there are no plans to swap
          (rightChildPriority < elementPriority && indexToSwap === null) ||
          //OR if right child is greater than left child and there ARE plans to swap
          (rightChildPriority < leftChildPriority && indexToSwap !== null)
        ) {
          //plan to swap with the right child
          indexToSwap = rightChildIndex;
        }
      }
      //if there are no plans to swap, break out of the loop
      if (indexToSwap === null) {
        break;
      }
      //swap with planned element
      this.swap(parentIndex, indexToSwap);
      //starting index is now index that we swapped with
      parentIndex = indexToSwap;
    }
  }

  // method that pushes new value onto the end and calls the bubble helper
  enqueue(element) {
    this.items.push(element);
    //calculate parent, if parent is greater swap
    //while loop or recurse
    this.bubbleUp();
    return this.items;
  }

  dequeue() {
    //swap first and last element
    this.swap(0, this.items.length - 1);
    //pop max value off of items
    let poppedNode = this.items.pop();
    //re-adjust heap if length is greater than 1
    if (this.items.length > 1) {
      this.bubbleDown();
    }

    return poppedNode;
  }
}


//-----------Alternative implementation-------------

var H = Array(50).fill(0);  
var size = -1;
 
//Function to return the index of the parent node of a given node:

function parent(i){
    return parseInt((i - 1) / 2);
}
 
//Function to return the index of the left child of the given node

function leftChild(i){
    return parseInt((2 * i) + 1);
}
 
//Function to return the index of the right child of the given node


function rightChild(i){
    return parseInt((2 * i) + 2);
}
 
//Function to shift up the node in order to maintain the heap property

function shiftUp(i) {
    while (i > 0 && H[parent(i)] < H[i]) {
        // Swap parent and current node
        swap(parent(i), i);
 
        // Update i to parent of i
        i = parent(i);
    }
}
 
function swap(i, j){
    var temp = H[i];
    H[i] = H[j];
    H[j] = temp;
}
 
//Function to shift down the node in order to maintain the heap property 
function shiftDown( i){
    var maxIndex = i;
 
    // Left Child
    var l = leftChild(i);
 
    if (l <= size && H[l] > H[maxIndex]) {
        maxIndex = l;
    }
 
    // Right Child
    var r = rightChild(i);
 
    if (r <= size && H[r] > H[maxIndex]) {
        maxIndex = r;
    }
 
    // If i not same as maxIndex
    if (i != maxIndex) {
        swap(i, maxIndex);
        shiftDown(maxIndex);
    }
}
 
//Function to insert a new element in the Binary Heap

function insert(p){
    size = size + 1;
    H[size] = p;
 
    // Shift Up to maintain heap property
    shiftUp(size);
}
 
//Function to extract the element with maximum priority

function extractMax(){
    var result = H[0];
 
    // Replace the value at the root with the last leaf
    H[0] = H[size];
    size = size - 1;
 
    // Shift down the replaced element to maintain the heap property
    shiftDown(0);
    return result;
}
 
//Function to change the priority of an element

function changePriority(i, p){
    var oldp = H[i];
    H[i] = p;
 
    if (p > oldp) {
        shiftUp(i);
    }
    else {
        shiftDown(i);
    }
}
 
//Function to get value of the current maximum element

function getMax(){
    return H[0];
}
 
//Function to remove the element located at given index

function remove(i){
    H[i] = getMax() + 1;
 
    // Shift the node to the root
    // of the heap
    shiftUp(i);
 
    // Extract the node
    extractMax();
}
 
/*Time Complexity: The time complexity of all the operations is O(logn) except for GetMax() which has time complexity of O(1). 
Auxiliary Space: O(N)


code source: Geeksforgeeks
*/
