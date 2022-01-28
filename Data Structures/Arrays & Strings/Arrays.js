class Array {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  //accessing
  get(index) {
    return this.data[index];
  }

  //searching (returns index of element)
  find(element) {
    for (let i in this.data) {
      if (this.data[i] === element) {
        return i;
      }
    }
    return "Element is not in array";
  }

  //inserting
  insert(element, index) {
    //call the shiftRight method to adjust the indices
    this.shiftRight(index);
    this.data[index] = element;
  }

  //shiftRight (to be used in conjunction with the insert method)
  shiftRight(index) {
    this.data.length++;
    for (let i = this.data.length - 1; i > index; i--) {
      array[i] = array[i - 1];
    }
  }

  //deleting
  delete(index) {
    delete this.data[index];
    //call the shiftLeft method to adjust the indices
    this.shiftLeft(index);
    this.length--;
  }

  //shiftLeft (to be used in conjunction with the delete method)
  shiftLeft(index) {
    for (let i = index; i < this.data.length - 1; i++) {
      array[i] = array[i + 1];
    }
  }

  //extra methods
  //replacing (replaces item at index with new element)
  replace(element, index) {
    this.data[index] = element;
  }

  //adding an element to the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  //removing last item from array and returning it
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
 
