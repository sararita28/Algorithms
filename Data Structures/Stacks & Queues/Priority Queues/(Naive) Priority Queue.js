//Container
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

  //adding element to PQ
    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority);

        let added = false;
        //loop through items in PQ (higher numbers have higher priority)
        for (let i = 0; i < this.items.length; i++) {
        //If new element has higher priority then add it at that place
        if (queueElement.priority > this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            added = true;
            break;
        }
        }
        //If element is not added then add it to the end of the queue
        if (!added) {
        this.items.push(queueElement);
        }
    }

    //Remove element from queue and return it
    dequeue() {
        return this.items.shift();
    }

    //Returning first element (i.e. highest priority) from the queue
    peek() {
        return this.items[0];
    }

    //Returning last element (i.e. lowest priority) from the queue
    rear() {
        return this.items[this.items.length - 1];
    }

    //Checking if queue is empty (returns boolean)
    isEmpty() {
        return this.items.length == 0;
    }

    //Returning size of the queue
    size() {
        return this.items.length;
    }

    //Printing the queue
    print() {
        for (let i = 0; i < this.items.length; i++) {
        console.log(
          `[element: ${this.items[i].element} - priority: ${this.items[i].priority}]`
        );
        }
    }
}
