//This implementation of a hash table utilizes separate chaining. When there is a collision, we simply push the key value pair array to the outer array.

class HashTable {
  constructor(size) {
    this.size = size;
    this.increaseDecreaseBy = 1.5;
    this.loadFactor = 0.667;
    this.table = new Array(size);
  }

  //Hash function
  hash(key) {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
      hash *= key.charCodeAt(i);
    }
    return hash % this.size;
  }

  //Increase table size
  increaseSize() {
    this.size *= Math.floor(this.increaseDecreaseBy); // mutiply table size by increaseDecreaseBy variable
    let newTable = new Array(this.size);
    //loop through old table
    this.table.forEach((item) => {
      if (item) {
        // for each inner key value pair array
        item.forEach(([key, value]) => {
          const index = this.hash(key); //hash its key and assign it to an index variable
          if (newTable[index]) {
            // if the new table contains its index
            if (newTable[index].key == key) {
              //and the key matches
              newTable[index].value = value; //update its value
            }
            newTable[index].push([key, value]); // else, push the new key, value pair to the outer array
          } else {
            //else, if the index position is empty
            newTable[index] = [[key, value]]; // add the key value pair
          }
        });
      }
    });
    this.table = newTable;
  }

  //Decrease table size
  decreaseSize() {
    this.size /= Math.floor(this.increaseDecreaseBy);
    let newTable = new Array(this.size);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = this.hash(key);
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  //Inserting a key/value pair
  setItem(key, value) {
    let index = this.hash(key);
    //if the position index is already filled
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          //and the key is already there
          this.table[index][i][1] = value; //update its value
          return;
        }
      }
      this.table[index].push([key, value]); // if the key is not there, you push it
    } else {
      //if the position is not filled
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;

    if (this.size / this.table.length > this.loadFactor) {
      //if table is over 2/3rds full
      this.increaseSize(); // increase table size
    }
  }

  //Searching for a value based on its key
  getItem(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          // if you've found the key
          return this.table[index][i][1]; //return its value
        }
      }
    }
    return undefined;
  }

  //Removing/Deleting a key/value pair
  removeItem(key) {
    let index = this.hash(key);
    if (this.table[index] && this.table[index].length) {
      //if the index isn't empty
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1); //delete the  key/value pair
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
    if (this.size / this.table.length < this.loadFactor) {
      //if table is less than 2/3rds full
      this.decreaseSize(); // decrease table size
    }
  }
}
