### Implementation of linked lists

class Node { 

    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add an element at the end of the list
    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;
        }
        while (current.next) {
            current = current.next
        }
        current.next = node;
    }
    this size++

    //insert element at the given index of the list
    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid Index")
        } else {
            var node = new Node(element);
            var curr, prev;
            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
            
                while (it < index>) {
                    it++
                    prev = curr;
                    curr = curr.next
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    //remove element from the list at given index
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid Index')
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }

    //remove a given element from the list
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    //return the index of a given element in the list
    indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }

    //checks if the list is empty
    isEmpty() {
        return this.size == 0;
    }

    //return the size of the list
    size_of_list() {
        return this.size;
    }

    //prints the list items
    printlist() {
        var curr = this.head;
        var str="";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}
   
