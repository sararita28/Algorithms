### Implementation of Queues

class Queue {

    constructor() {
        this.items = [];
    }

    //adds an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    //removes an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        } else {
            return this.items.shift();
        }
    }

    //returns the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "No elements in queue"
        } else {
        return this.items[0]
        }
    }

    //checks if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    //prints all elements of the queue (in a string)
    printQueue() {
        var str = ""
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

}
