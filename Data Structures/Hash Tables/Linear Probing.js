//source code: https://tylerewillis.com/page/hash-table-linear-probing

//Phone book hash table class
function phoneBook(size) {
	this.count = 0 // to keep track of the actual item count in our table
	this.size = size // the current storage size of our table
	this.maxLoadFactor = 0.667 // when our table crosses the 2/3rds capacity, the size will either need to be increased or decreased
	this.increaseBy = 1.5 // when our table size is changed, this factor determines how large the charge will be
	this.table = new Array(size) // the table that will hold our keys and values
}

//Hash function
phoneBook.prototype.hash = function(x) {
	var a = 113 // random number between 1 and p - 1
	var b = 87 // random number between 1 and p - 1
	var p = 10000019 // prime number - the higher the more unique
	var m = this.size // hash table rows
	return ((a * x + b) % p) % m // return result of hash formula
}

//Add to hash table
phoneBook.prototype.add = function(key, value) { // Constant Time
	var key = key.replace(/-/g, '') // replace hyphens from key input
	var hash = this.hash(key) // create hash value out of key

	if (this.table[hash]) { // if position is already filled
		if (this.table[hash].key == key) { // if table position's key matches
			this.table[hash].value = value // update value
		} else {
			var val = this.probe(hash)
			this.table[val] = {key, value} // then place key and value in found empty position
			this.count++ // increment count of phone book after adding value
		}
	} else { // ff position empty
		this.table[hash] = {key, value} // place key and value in found empty position
		this.count++ // increment count of phone book after adding value
	}
	if (this.count >= (this.size * this.maxLoadFactor)) { // if phone book is full
		this.increaseSize() // call function to increase size of table
	}
}

//probe hash table
phoneBook.prototype.probe = function(hash) {
	var a = 1; // 1 or where GCD of size and a is 1
	var i = 0 // counter to use for incrementing
	var val = (hash + (a * i)) % this.size // get value with probe of 0
	while (this.table[val]) { // while table's position is filled
		i++ // increment i
		val = (hash + (a * i)) % this.size // probe next position
	}
	return val // return the result of the hash and probe function that results in an empty table position
}

//Increase Size of hash table
phoneBook.prototype.increaseSize = function() {
	var temp = this.table // set current table equal to temp variable
	this.size = this.size * this.increaseBy // increase size of phone book
	this.table = new Array(this.size) // create new table with updated size
	for (i = 0; i < temp.length; i++) { // loop through current table
		if (temp[i]) { // if value in current table at position
			var key = temp[i].key // get key at position
			var value = temp[i].value // get value at position
			var hash = this.hash(key) // hash key value
			if (this.table[hash]) { // if position is already filled
				var val = this.probe(hash) // get new hash value returned from probe function
				this.table[val] = {key, value} // then place key and value in found empty position
			} else { // if position empty
				this.table[hash] = {key, value} // place key and value in found empty position
			}
		}
	}
}

//Get value from hash table
phoneBook.prototype.get = function(key) {
	var key = key.replace(/-| /g, '') // replace hyphens from key input
	var hash = this.hash(key) // create hash value out of key
	var a = 1; // probe a - 1 or where GCD of size and a is 1
	var i = 0 // counter for probe
	var val = (hash + (a * i)) % this.size // initial probe value with probe of 0

	if (this.table[hash]) { // if table position is already filled
		if (this.table[hash].key == key) { // if position's key matches
			return this.table[hash].value // return value
		} else {
			while (this.table[val]) { // while table position contains value
				if (this.table[val].key == key) { // if key matches
					return this.table[val].value // return value
				}
				i++ // Increment i
				val = (hash + (a * i)) % this.size // Probe next position
			}
			console.log('Number Not Found')
		}
	}
}

//Remove from hash table
phoneBook.prototype.remove = function(key) { // Constant Time
	var key = key.replace(/-| /g, '') // remove hyphens from key input
	var hash = this.hash(key) // create hash value of key
	var a = 1; // probe a - 1 or where GCD of size and a is 1
	var i = 0 // counter for probe
	var val = (hash + (a * i)) % this.size // probe value with probe of 0

	if (this.table[hash]) { // if table position has value
		if (this.table[hash].key == key) { // if key matches
			delete this.table[hash] // delete value at position
			this.count-- // decrement count
		} else {
			while (this.table[val]) { // while position has value
				if (this.table[val].key == key) { // if key matches
					delete this.table[val] // delete value at position
					this.count-- // decrement count
					break // break out of loop
				}
				i++ // increment i for probe
				val = (hash + (a * i)) % this.size // probe next position
			}
			console.log('Number Not Found') // log message
		}
	} else {
		console.log('Number Not Found') // log message
	}
	if (this.count < (this.size * this.maxLoadFactor)) { // if count decreased below load factor
		this.decreaseSize() // call function to decrease size of table
	}
}

//Decrease the size of hash table
phoneBook.prototype.decreaseSize = function() {
	var temp = this.table // set current table equal to temp variable
	this.size = this.size / this.increaseBy // decrease size of phone book
	this.table = new Array(this.size) // create new table with updated size
	for (i = 0; i < temp.length; i++) { // loop through current table
		if (temp[i]) { // ff value in current table at position
			var key = temp[i].key // get key at position
			var value = temp[i].value // get value at position
			var hash = this.hash(key) // hash key value
			if (this.table[hash]) { // ff position is already filled
				var val = this.probe(hash) // get new hash value returned from probe function
				this.table[val] = {key, value} // then place key and value in found empty position
			} else { // if position empty
				this.table[hash] = {key, value} // place key and value in found empty position
			}
		}
	}
}
