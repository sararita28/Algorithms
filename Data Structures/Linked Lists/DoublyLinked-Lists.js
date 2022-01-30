class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    //if list is not empty
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++
      return newNode;
    }

    this.head = this.tail = newNode;
    this.length++;
    return newNode;
  }

  removeAtTail() {
    if (this.tail) {
      this.length--;

      const removedTail = this.tail;

      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      return removedTail;
    }
    return undefined;
  }

  insertAtHead(data) {
    this.length++;
    let newNode = new Node(data);

    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  removeAtHead() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      return removedHead;
    }
    return undefined;
  }

  insertIndex(data, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertAtHead(data);
    }

    this.length++;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const prevNode = currentNode.prev;
    const newNode = createNode(data);
    newNode.next = currentNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    currentNode.prev = newNode;
    return newNode;
  }

  // remove at specific index

  removeIndex(index) {
    if (index >= this.length) return null

    if (index === 0) return this.removeAtHead();

    this.length--;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const prevNode = currentNode.prev;
    const nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    return currentNode;
  }
}
