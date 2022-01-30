//Heavily flawed code. Fix!!!!

class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  //Inserting at head
  insertAtHead(data) {
    const newNode = new Node(data, this.head, null);
    //this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //Inserting at tail
  insertAtTail(data) {
    if (!this.head) return this.insertAtHead(data);
    if (this.tail) {
        this.tail.next = new Node(data, null, this.tail)
    }
    this.length++;
  }

  //Inserting anywhere in the list (at index)
  insertAtIndex(index, data) {
    if (index === 0) return this.insertAtHead(data);
    
    let prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    const newNode = new Node(data, prev.next, prev);
    prev.next = newNode
    prev.next.prev = newNode;
    this.length++;
  }

  //Searching for a node by index
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null; //if index is not valid immediately return null

    let current = this.head; //set current index to head
    for (let i = 0; i < index; i++) {
      //loop through till the index
      current = current.next;
    }
    return current.data; //since the last element in the loop is pointing at the index (you can also return current if you need all the information)
  }

  //Removing at head
  removeAtHead() {
    this.head = this.head.next;
    this.head.prev = null
    this.length--;
  }

  //Removing at tail
  removeAtTail() {
    if (this.head == null || this.head.next == null) return null;
    this.tail = this.tail.prev
    this.tail.next = null
    this.length--;
  }

  //Removing anywhere in the list (at index)
  removeAtIndex(index) {
    if (index === 0) return this.removeAtHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    prev.next.prev = prev
    this.length--;
  }
}
