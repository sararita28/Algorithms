//source code: https://tylerewillis.com/page/binary-max-heap

class Heap {
  constructor(maxSize) {
    this.size = 0;
    this.maxSize = maxSize;
    this.H = [];
  }

  parent = (i) => Math.floor(i / 2);
  leftChild = (i) => i * 2;
  rightChild = (i) => i * 2 + 1;

  //insert method
  insert = (p) => {
    // O(log n)
    if (this.size !== this.maxSize) {
      this.H[this.size] = p;
      this.bubbleUp(this.size);
      this.size++;
    }
  };

  //bubbleUp method
  bubbleUp = (i) => {
    // O(log n)
    while (i > 0 && this.H[this.parent(i)] < this.H[i]) {
      var temp = this.H[this.parent(i)];
      this.H[this.parent(i)] = this.H[i];
      this.H[i] = temp;
      i = this.parent(i);
    }
  };

  //bubbledown method
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

  //remove method
  remove = (i) => {
    // O(log n)
    this.H[i] = Infinity;
    this.bubbleUp(i);
    this.extractMax();
  };

  //extract max method
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
