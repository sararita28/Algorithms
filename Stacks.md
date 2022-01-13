//Creating a stack class
class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    
    //Inserting an Element to the Top of Stack
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
   }
   
    //Returning the Length of the Stack
    length() {
      return this.top;
    }
    
    //Getting the Top Element of the Stack
    peek() {
      return this.data[this.top -1 ];
   }
   
   //Checking If the Stack Is Empty
   isEmpty() {
      return this.top === 0;
  }   
  
  //Deleting top element
  pop() {
     this.top = this.top -1;
     return this.data.pop(); // removes the last element
  }
  
  //Printing the Elements of the Stack
  function print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while(top >= 0) { // print upto 0th index
    console.log(this.data[top]);
    top--;
    }
  }
  
  //Reversing the stack
  function reverse() {
   this._reverse(this.top - 1 );
  }
  function _reverse(index) {
   if(index != 0) {
      this._reverse(index-1);
   }
    console.log(this.data[index]);
    }
 
  
}
