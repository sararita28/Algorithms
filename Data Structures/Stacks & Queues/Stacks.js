class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    //Pushing (adding to top)
    push(element) {
        this.items[this.count] = element
        this.count ++
    }

    //Removing top element and returning it
    pop() {
        if (this.count == 0) return `Stack is empty`
        delete this.items[this.count-1]
        this.count--;
    }

    //Peeking (returning top element)
    peek() {
        if (this.count == 0) return `Stack is empty`;
        return this.items[this.count - 1];
    }

    //Checking if stack is empty
    isEmpty() {
        return this.count == 0
    }

    //getting length/size of stack
    size() {
        return this.count
    }
}


//------------------- Alternative Implementation -----------------------

class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    push(element) {
        return this.items.push(element);
    }
    
    // removing top element from stack
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // viewing the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // checking if the stack is empty (returns boolean)
    isEmpty(){
       return this.items.length == 0;
    }
   
    // Returning length/size of stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}
