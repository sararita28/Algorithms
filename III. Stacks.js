
class Stack {

    constructor() {
        this.items = [];
        this.top = 0;
    }

    //adds an element to the (top of) stack
    push(element) {
        this.items[this.top] = element;
        this.top = this.top + 1;
    }

    //returns the length of the stack
    length() {
        return this.top;
    }

    //removes element from (top of) stack
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        } else {
            this.top = this.top - 1;
            return this.items.pop();
        }
    }

    //returns the top-most element in the stack but doesn't delete it
    peek() {
        return this.items[this.top - 1]
    }

    //checks if the stack is empty
    isEmpty() {
        return this.top === 0;
    }

    //prints all elements of the stack
    print() {
        var top = this.top - 1
        while (top >= 0) {
            return this.data[top];
            top--
        }
    }

    //reverses the stack
    reverse() {
        this._reverse(this.top - 1)
    }
    _reverse(index) {
        if (index != 0) {
            this._reverse(index - 1)
        }
        return this.data[index]
    }

}
