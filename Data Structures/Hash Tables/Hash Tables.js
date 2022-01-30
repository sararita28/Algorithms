class HashTable {
  constructor() {
    this.table = [];
    this.size = 0;
  }

  //Hash function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  //Inserting a key/value pair
  setItem(key, value) {
    let index = this.hash(key);
    if (this.table[index]) { //if the position index is already filled
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) { //and the key is already there 
          this.table[index][i][1] = value; //update its value
          return;
        }
      }
      this.table[index].push([key, value]); // if the key is not there, you push it
    } else { //if the position is not filled 
      this.table[index] = []; 
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  //Searching for a value based on its key
  getItem(key) {
    let index = this.hash(key)
    if (this.table[index]) {
        for (let i=0; i<this.table.length; i++) {
            if (this.table[index][i][0] === key) { // if you've found the key
                return this.table[index][i][1] //return its value
            }
        }
    }
    return undefined
  }

  //Removing/Deleting a key/value pair
  removeItem(key) {
    let index = this.hash(key);
    if (this.table[index] && this.table[index].length) { //if the index isn't empty
        for (let i=0; i<this.table.length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1); //delete the  key/value pair
                this.size--;
                return true
            }
        }
    } else {
        return false
    }
  }
}
