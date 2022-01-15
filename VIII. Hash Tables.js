// create a hash table class (this example will use a table with the size of 127)
class HashTable {
  constructor() {
    this.table = new Array(127); //this is where all key/value pairs will be stored
    this.size = 0;
  }
  
// create a hash() method to accept key value and transform it to an index
  _hash(key) { // '_' indicates it's a private class
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // this hash will sum the ASCII code of the chars in the key
    }
    return hash % this.table.length; //we use the modulo operator to ensure the value doesn't exceed the bucket size (of 127 in this case)
  }

  //write a set() method to get the index value
  set(key, value) {
    const index = this._hash(key); // call the _hash() method to get the index value
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  //write a get() method to retrieve a value by its key
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined; // if no key/value pair is stored in the specific index return indefined
  }

  //write a remove() method to delete a key/value pair
  remove(key) {
    //retrieve the index using the _hash() method
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

//source: FreeCodeCamp
