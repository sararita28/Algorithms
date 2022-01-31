class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Aadding to last
  enqueue(element) {
    this.count++;
    this.items[this.count -1] = element;
  }

  //Removing first element and returning it
  dequeue() {
    if (this.count == 0) return `Queue is empty`;
    this.items.shift();
    this.count--;
  }

  //Peeking (returning top/head of queue)
  peek() {
    if (this.count == 0) return `Queue is empty`;
    return this.items[0]
  }

  //Checking if queue is empty
  isEmpty() {
    return this.count == 0;
  }

  //getting length/size of queue
  size() {
    return this.count;
  }
}

//------------------- Alternative Implementation -----------------------

class Queue {
  constructor() {
    this.items = [];
  }

  // adding element to the queue
  enqueue(element) {
    return this.items.push(element);
  }

  // removing element from the queue
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  // viewing the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // returning the size of the queue
  size() {
    return this.items.length;
  }

  // emptying the queue
  clear() {
    this.items = [];
  }
}
