//This implementation of a hash table utilizes open addressing and linear probing as its probing sequence

class HashTable {
  constructor(size) {
    this.count = 0; // keeps track of the actual item count in our table
    this.size = size; // current storage size of our table
    this.loadFactor = 0.667; // treshold to refer to when growing(once above it) or decreasing(once below it) the size of our table
    this.increaseDecreaseBy = 1.5; // determines the change of our table size
    this.table = new Array(size); // the table that will hold our keys and values
  }

  //Hash function
  hash(key) {
    let a = 113; // random number between 1 and p - 1
    let b = 87; // random number between 1 and p - 1
    let p = 10000019; // prime number - the higher the more unique
    let m = this.size; // number of hash table rows (i.e. current hash table size)
    return ((a * key + b) % p) % m;
  }

  //Probe hash table
  probe(hash) {
    let a = 1; // 1 or where GCD of size and a is 1
    let i = 0; // counter to use for incrementing
    let val = (hash + a * i) % this.size; // get value with probe of 0
    while (this.table[val]) {
      //while table's position is filled
      i++;
      val = (hash + a * i) % this.size; // probe next position
    }
    return val;
  }

  //Increase hash table size
  increaseSize() {
    let temp = this.table; // assign table to temp variable
    this.size *= this.increaseDecreaseBy; // mutiply table size by increaseDecreaseBy variable
    this.table = new Array(this.size); // create new table with new size
    //loop through old table
    for (let i = 0; i < temp.length; i++) {
      //for all valid indices of the temp table
      if (temp[i]) {
        let key = temp[i].key; //get key at position
        let value = temp[i].value; //get value at position
        let index = this.hash(key); // hash key
        //if new table at index position is already filled
        if (this.table[index]) {
          let val = this.probe(index); //call probe function to find new index
          this.table[val] = { key, value }; // assign key value pair to new empty position
        } else {
          this.table[index] = { key, value }; // assign key value pair to index of new table
        }
      }
    }
  }

  //Decrease hash table size
  decreaseSize() {
    let temp = this.table; // assign table to temp variable
    this.size /= this.increaseDecreaseBy; // divide table size by increaseDecreaseBy variable
    this.table = new Array(this.size); // create new table with new size
    //loop through old table
    for (let i = 0; i < temp.length; i++) {
      //for all valid indices of the temp table
      if (temp[i]) {
        let key = temp[i].key; //get key at position
        let value = temp[i].value; //get value at position
        let index = this.hash(key); // hash key
        //if new table at index position is already filled
        if (this.table[index]) {
          let val = this.probe(index); //call probe function to find new index
          this.table[val] = { key, value }; // assign key value pair to new empty position
        } else {
          this.table[index] = { key, value }; // assign key value pair to index of new table
        }
      }
    }
  }

  //Inserting a key/value pair
  setItem(key, value) {
    let index = this.hash(key);
    if (this.table[index]) {
      //if position is already filled
      if (this.table[index].key == key) {
        //and the key corresponds to our key argument
        this.table[index].value = value; //update its value
      } else {
        //if it's filled with another key
        let val = this.probe(index); // call probe method and pass in hashed key value
        this.table[val] = { key, value }; //assign key value pair to new empty position
        this.count++;
      }
    } else {
      //if position is empty
      this.table[index] = { key, value }; //assign key value pair to it
      this.count++;
    }
    if (this.count >= this.size * this.loadFactor) {
      //if table is full (above load factor)
      this.increaseSize(); // call increaseSize method
    }
  }

  //Searching for a value based on a key
  getItem(key) {
    let index = this.hash(key);
    let a = 1; // probe a-1 or where GCD of size and a is 1
    let i = 0; // counter for probe
    let val = (index + a * i) % this.size; // initial probe value with probe of 0

    if (this.table[index]) {
      if (this.table[index].key == key) {
        // if position is filled and key matches
        return this.table[index].value; // return its value
      } else {
        // if position is not filled, while table contains value index
        while (this.table[val]) {
          if (this.table[val].key == key) {
            //if key matches
            return this.table[val].value; // return its value
          }
          i++; // otherwise increment counter and keep looking
          val = (index + a * i) % this.size; //probe next position
        }
        console.log(`Value not found`);
      }
    }
  }

  //Deleting a key/value pair
  removeItem(key) {
    let index = this.hash(key);
    let a = 1;
    let i = 0;
    let val = (index + a * i) % this.size; // probe value with probe of 0

    if (this.table[index]) {
      //if position is filled
      if (this.table[index].key == key) {
        //if key matches
        delete this.table[hash];
        this.count--;
      } else {
        while (this.table[val]) {
          //while position has value
          if (this.table[val].key == key) {
            delete this.table[val];
            this.count--;
            break;
          }
          //if key doesn't correspond increment i and keep looking
          i++;
          val = (hash + a * i) % this.size; //probe next position
        }
        console.log("Value not found");
      }
    }
    console.log("Value not found");
    if (this.count < this.size * this.loadFactor) {
      //if size below load factor
      this.decreaseSize(); //call decreaseSize function
    }
  }
}

//Thank you Tylere Willis for your blog post: https://tylerewillis.com/page/hash-table-linear-probing
