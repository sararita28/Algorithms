class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Inserting at head
  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  //Inserting at tail
  insertAtTail(data) {
    if (!this.head) return this.insertAtHead(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data, null);
    this.length++;
  }

  //Inserting anywhere in the list (at index)
  insertAtIndex(index, data) {
    if (index === 0) return this.insertAtHead(data);

    let prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new Node(data, prev.next);
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
    this.length--;
  }

  //Removing at tail
  removeAtTail() {
    if (this.head == null || this.head.next == null) return null;

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.length--;
  }

  //Removing anywhere in the list (at index)
  removeAtIndex(index) {
    if (index === 0) return this.removeAtHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }
}


// -------------- Alternative Code -------------------

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
   
