class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if empty make it head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Insert at index
  insertAtIndex(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //if it's the first index
    if (index === 0) {
      this.head = new Node(data, this.head); // you can also call the insertFirst method
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first because you want to start at the head
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAtIndex(index) {
    //index out of range
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
   
