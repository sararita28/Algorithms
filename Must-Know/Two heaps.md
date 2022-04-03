To be able to solve these kinds of problems, we want to know the smallest element in one part and the biggest element in the other part. Two Heaps 
pattern uses 2 Heap data structure to solve these problems; a Min Heap to find the smallest element and a Max Heap to find the biggest element.

Below is the explanation for the following implementation of minHeap:
class MinHeap is initially set with a dummy node (null)
It has 3 methods: 
1. getMin : (the min in a minheap is always the first element. Since our index 0 is a null node we should return 
  the element at index 1)
2. insert : (we start by simply pushing the node to our heap. If the heap was empty then no additional work is needed. 
  Else, we store the index of the element we just added in a 'current' variable. While the parent (current/2) is greater 
  than current and current > 1, we swap them up. Finally current becomes the parent
3. remove : (removes the smallest element) If there are more than 2 elements, we put the rightmost element instead of 
  the minHeap (1st node) and remove the smallest element. We store the first element's index in a 'current' variable 
  and do the same with the leftChildIndex(current * 2) and rightChildIndex(current * 2 + 1). While the 2 children are 
  present and the current el is greater than either one of them, compare left to right. If latter is smallest swap curr 
  with right and set curr to be right. Do the opposite if left is smallest. 
  Update leftChildIndex and rightChildIndex = current * 2 and current * 2 + 1 respectively


Min-Heap
```
  class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    let smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2])  [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2)  this.heap.splice(1, 1);
    else return null;
    return smallest;
  }
}
```

Max-heap
```
class Heap {
  constructor(maxSize) {
    this.size = 0;
    this.maxSize = maxSize;
    this.H = [];
  }

  parent = (i) => Math.floor(i / 2);
  leftChild = (i) => i * 2;
  rightChild = (i) => i * 2 + 1;

  insert = (p) => {
    // O(log n)
    if (this.size !== this.maxSize) {
      this.H[this.size] = p;
      this.bubbleUp(this.size);
      this.size++;
    }
  };

  bubbleUp = (i) => {
    // O(log n)
    while (i > 0 && this.H[this.parent(i)] < this.H[i]) {
      var temp = this.H[this.parent(i)];
      this.H[this.parent(i)] = this.H[i];
      this.H[i] = temp;
      i = this.parent(i);
    }
  };

  bubbleDown = (i) => {
    // O(log n)
    var maxIndex = i;
    var left = this.leftChild(i);
    var right = this.rightChild(i);

    if (left <= this.size && this.H[left] > this.H[maxIndex]) {
      maxIndex = left;
    }
    if (right <= this.size && this.H[right] > this.H[maxIndex]) {
      maxIndex = right;
    }

    if (i !== maxIndex) {
      var temp = this.H[i];
      this.H[i] = this.H[maxIndex];
      this.H[maxIndex] = temp;
      this.bubbleDown(maxIndex);
    }
  };

  remove = (i) => {
    // O(log n)
    this.H[i] = Infinity;
    this.bubbleUp(i);
    this.extractMax();
  };

  extractMax = () => {
    // O(log n)
    var result = this.getMax();
    this.H[0] = this.H[this.size - 1]; // replace root by last leaf
    this.H.pop(); // remove last leaf
    this.size--; // decrease size of heap
    this.bubbleDown(0); // sift the new root down
    return result; // return the maximum value
  };

  getSize = () => this.size; // O(1)

  getMax = () => this.H[0]; // O(1)

  changePriority = (i, p) => {
    // O(log n)
    var old = this.H[i];
    this.H[i] = p;
    var result = p > old ? this.bubbleUp(i) : this.bubbleDown(i);
  };
}
```
